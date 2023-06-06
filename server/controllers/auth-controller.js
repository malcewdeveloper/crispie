const authService = require('../services/auth-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const UserDto = require('../dtos/UserDto');

class AuthController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.mapped()));
            }
            const { email, password } = req.body;
            const { refreshToken, accessToken, user } = await authService.registration(email, password);
            const userDto = new UserDto(user.id, user.email);
            res.cookie('accessToken', accessToken, {maxAge: 30 * 60 * 1000, httpOnly: true});
            res.cookie('refreshToken', refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            res.status(200).json({ redirectUrl: `${ process.env.CLIENT_URL }`, user: userDto });
        } catch(error) {
            next(error);
        }
    }
    async login(req, res, next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.mapped()));
            }
            const { email, password } = req.body;
            const { accessToken, refreshToken, user } = await authService.login(email, password);
            const userDto = new UserDto(user.id, user.email)
            res.cookie('accessToken', accessToken, { maxAge: 30 * 60 * 1000, httpOnly: true })
            res.cookie('refreshToken', refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            return res.status(200).json({ redirectUrl: `${ process.env.CLIENT_URL }`, user: userDto });
        } catch (error) {
            next(error)
        }
    }
    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await authService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (error) {
            next(error)
        }
    }
    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const token = await authService.logout(refreshToken);
            res.clearCookie('refreshToken');
            res.clearCookie('accessToken');
            return res.status(200).json({ status: 200, statusText: 'OK' });
        } catch (error) {
            next(error);
        }
    }
    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const { user, refreshToken: newRefreshToken, accessToken: newAccessToken } = await authService.refresh(refreshToken);
            const userDto = new UserDto(user.id, user.email);
            res.cookie('accessToken', newAccessToken, { maxAge: 30 * 60 * 1000, httpOnly: true });
            res.cookie('refreshToken', newRefreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });
            return res.status(200).json({ status: 200, statusText: 'OK', user: userDto });
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AuthController();