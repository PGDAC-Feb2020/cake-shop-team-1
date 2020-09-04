const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");
let addOrder = async (input) => {
  const connection = mysql.createConnection(config.DB_CONFIG);
  await connection.connectAsync();

  let sql =
  "INSERT INTO orders (cakename, price, message, address) VALUES (?, ?, ?, ?)";
  await connection.queryAsync(sql, [
    input.name,
    input.price,
    input.message,
    input.add,
  ]);

  await connection.endAsync();
};

module.exports = { addOrder };