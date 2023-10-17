const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "autoroomDB",
    password: process.env.db_password || "test",
    port: process.env.DB_PORT || 5432
});

module.exports = pool;
