const config = require('dotenv').config()

const env = config.parsed ?? process.env

module.exports = {
    SERVER_PORT: env.PORT,
    DATABASE_URL: env.DATABASE_URL
}