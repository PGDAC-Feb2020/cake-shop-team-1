const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");
let addUser = async (input) => {
  const connection = mysql.createConnection(config.DB_CONFIG);
  await connection.connectAsync();

  let sql =
  "INSERT INTO users (Username, contact, pass, conPass) VALUES (?, ?, ?, ?)";
  await connection.queryAsync(sql, [
    input.username,
    input.number,
    input.password,
    input.conPassword,
  ]);

  await connection.endAsync();
};

module.exports = { addUser };