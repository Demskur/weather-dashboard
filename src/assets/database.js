const mysql = require("promise-mysql");
//TODO esto ya no va, voy a reemplazarlo por https://dev.mysql.com/doc/dev/connector-nodejs/8.0/
const connection = mysql.createConnection({
  host: "localhost",
  user: "fp",
  password: "10514Faee2*",
  database: "electronjs",
});

function getConnection() {
  return connection;
}

module.exports = { getConnection };
