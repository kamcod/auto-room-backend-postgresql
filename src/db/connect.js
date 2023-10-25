const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.DB_USER || "postgres",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "autoRoomDB",
    password: process.env.DB_PASSWORD || "DB@123",
    port: process.env.DB_PORT || 5432
});

module.exports = pool;