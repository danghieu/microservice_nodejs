module.exports = {
  db: {
    username: process.env.MYSQL_USERNAME || 'mysql',
    password: process.env.MYSQL_PASSWORD || 'mysql',
    database: process.env.MYSQL_DATABASE || 'mysql',
    host: '192.168.80.1',
    dialect: 'mysql'
  }
};