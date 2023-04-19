const db = require('../db');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const tokenService = require('./token-service');
const mailService = require('./mail-service');
const ApiError = require('../exceptions/api-error');

class UserService {
    async registration(email, password) {
        const candidate = (await db.query("SELECT * FROM users WHERE email=$1", [email])).rows.length > 0;
        if(candidate) {
            throw ApiError.BadRequest('Пользователь уже существует');
        }
        
        return bcrypt.hash(password, 3)
        .then(hashPassword => {
            const activationLink = uuid.v4();
            const query = {
                text: 'INSERT INTO users (email, password, activation_link) VALUES ($1, $2, $3) RETURNING *',
                values: [email, hashPassword, activationLink]
            }
            // mailService.sendActiovationLink(email, `${process.env.API_URL}/api/activate/${activationLink}`);
            const user = db.query(query);
            return user;
        })
        .then(user => {
            const tokens = tokenService.generateToken({...user.rows[0]});
            tokenService.saveToken(user.rows[0].id, tokens.refreshToken);

            return {
                ...tokens,
                user: user.rows[0]
            }
        })
    }

    async login(email, password) {
        const user = await db.query('SELECT * FROM users WHERE email=$1', [email]);
        if(user.rows.length < 1) {
            throw ApiError.BadRequest('Пользователь с таким email не найден');
        }

        return bcrypt.compare(password, user.rows[0].password)
        .then(isEquelPassword => {
            if(!isEquelPassword) {
                throw ApiError.BadRequest('Логин или пароль указан неверно');
            }
            const tokens = tokenService.generateToken({...user.rows[0]});
            tokenService.saveToken(user.rows[0].id, tokens.refreshToken);
            return {
                ...tokens,
                user: user.rows[0]
            }
        })
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw new ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenDb = await tokenService.findToken(refreshToken);
        if(!userData || !tokenDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await db.query('SELECT * FROM users WHERE id=$1', [userData.id]);
        const tokens = tokenService.generateToken({ ...user.rows[0] });
        tokenService.saveToken(user.rows[0].id, tokens.refreshToken);
        return {
            ...tokens,
            user: user.rows[0]
        }
    }

    async activate(activationLink) {
        const query = {
            text: 'SELECT * FROM users WHERE activation_link=$1',
            values: [activationLink]
        }
        const user = await db.query(query);
        if(!user) {
            throw ApiError.BadRequest('Некорректная ссылка активации');
        }
        db.query('INSERT INTO users (is_activated) VALUES ($1) RETURNING *', [true]);
    }
}

module.exports = new UserService();