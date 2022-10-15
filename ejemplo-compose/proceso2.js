var mysql      = require('mysql2');
const fs = require('fs')
var connection = mysql.createConnection({
  host     : 'db',
  user     : 'root',
  password : 'test_pass',
  database : 'mi_db'
}, {multipleStatements: true});
 
(async () => {

  console.log(fs.readFileSync('./logs2.txt', 'utf-8'));
  connection.connect();
  let date = new Date()
  connection.query(`SELECT * FROM logs`, function (error, results, fields) {
    if (error) throw error;
    console.log('Results: ', results);
    fs.writeFileSync('./logs2.txt', JSON.stringify(results))
    
  });

  
  connection.end();
})();