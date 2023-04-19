const db = require('../db');
const userService = require('../services/user-service');

class UserController {
    async getUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();
            return res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();