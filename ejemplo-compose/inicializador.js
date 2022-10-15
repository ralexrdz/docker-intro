var mysql      = require('mysql2');
const fs = require('fs')
var connection = mysql.createConnection({
  host     : 'db',
  user     : 'root',
  password : 'test_pass',
  // database : 'sps'
}, {multipleStatements: true});
 
(async () => {

  let query = fs.readFileSync('./inicializaDB.sql', 'utf-8')

  console.log('query', query)
  connection.connect();
  
  query.split(';').forEach(q => {
    if (q) {
      connection.query(q+';', function (error, results, fields) {
        if (error) throw error;
        console.log('Results: ', results);
      });
    }
  })
  
  connection.end();
})();