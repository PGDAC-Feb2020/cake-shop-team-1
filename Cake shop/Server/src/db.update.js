const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");
let UpdateUser = async (input) => {
  const connection = mysql.createConnection(config.DB_CONFIG);
  await connection.connectAsync();

   sql =
  "UPDATE users SET Pass = ? where Username = ? ";
  await connection.queryAsync(sql, [
    
    input.username,
    input.password,
    
    
    
  ]);

  await connection.endAsync();
};

module.exports = { UpdateUser };