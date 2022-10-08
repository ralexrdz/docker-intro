var MongoClient = require('mongodb').MongoClient;

const express = require('express')
const app = express()


const port = 3000
var url = "mongodb://mi-mongo-prod:27017/";

app.get('/', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) console.log(err);
    var dbo = db.db("mydb");
    var myobj = { name: "ASD", address: "asd 58" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) console.log(err);
      console.log("1 document inserted");
      db.close();
    });
    dbo.collection("teams").insertOne({
      name: 'asd',
      peopleCount: 2
    }, function(err, res) {
      if (err) console.log(err);
      console.log("1 document inserted");
      db.close();
    });
  }); 
  res.send('ASD!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




