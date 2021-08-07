module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '123n',
    DB: 'metal',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};