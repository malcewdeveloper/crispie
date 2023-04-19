const db = require('../db');

class UserService {
    async getAllUsers() {
        const users = (await db.query('SELECT * FROM users')).rows;
        return users;
    }
}

module.exports = new UserService();