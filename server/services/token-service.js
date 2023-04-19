const jwt = require('jsonwebtoken');
const db  = require('../db');


class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30s'});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (error) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (error) {
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        let tokenData = (await db.query('SELECT * FROM tokens WHERE user_id=$1', [userId])).rows.length > 0;
        if(tokenData) {
            return tokenData = (await db.query('UPDATE tokens SET refresh_token=$1 WHERE user_id=$2', [refreshToken, userId])).rows[0];
        }
        const token = await db.query('INSERT INTO tokens (refresh_token, user_id) VALUES ($1, $2) RETURNING *', [refreshToken, userId]);
        return token.rows[0];
    }

    async findToken(refreshToken) {
        const tokenData = await db.query('SELECT * FROM tokens WHERE refresh_token=$1', [refreshToken]);
        return tokenData;
    }

    async removeToken(refreshToken) {
        const tokenData = await db.query('DELETE FROM tokens WHERE refresh_token=$1', [refreshToken]);
        return tokenData;
    }
}

module.exports = new TokenService();