var mysql      = require('mysql2');
const fs = require('fs')
var connection = mysql.createConnection({
  host     : 'db',
  user     : 'root',
  password : 'test_pass',
  database : 'mi_db'
}, {multipleStatements: true});
 
(async () => {


  connection.connect();
  let date = new Date()
  connection.query(`INSERT INTO logs VALUES ("${date.toISOString()}");`, function (error, results, fields) {
    if (error) throw error;
    console.log('Results: ', results);
  });
  
  connection.end();
})();