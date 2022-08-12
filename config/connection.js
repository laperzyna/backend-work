require('dotenv').config();

const Sequelize = require('sequelize');
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
 
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId + "\n");

// });