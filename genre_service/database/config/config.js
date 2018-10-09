module.exports = {
  db: {
    username: process.env.POSTGRES_USERNAME || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_DB || 'postgres',
    host: process.env.POSTGRES_HOST || '127.0.0.1',
    dialect: process.env.POSTGRES_DRIVER || 'postgres'
  }
};