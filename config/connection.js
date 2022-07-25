const Sequelize = require("sequelize");
require("dotenv").config();
////Define sequelize as let, its value could change
let sequelize;
//* 🦉IF I deploy to Heroku, Then, This will run, granted I add it to my .env file 🔏
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "mysql",
            port: 3306,
        }
    );
}

module.exports = sequelize;
