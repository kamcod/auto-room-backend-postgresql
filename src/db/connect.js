const Pool = require("pg").Pool;

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    user: process.env.POSTGRES_USER || "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    database: process.env.POSTGRES_NAME || "autoRoomPOSTGRES",
    password: process.env.POSTGRES_PASSWORD || "POSTGRES@123",
    port: process.env.POSTGRES_PORT || 5432
});

module.exports = pool;
