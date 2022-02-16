module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'TbUH5u06vy',
        password: process.env.MYSQL_PASS || 'C6aEyV1v9U',
        database: process.env.MYSQL_DB || 'TbUH5u06vy',
    },
}