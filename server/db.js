const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    port: '5432',
    database: 'crispie'
});

module.exports = pool