const mysql = require('mysql');
const express = require("express")
const app = express()

// React hooks
// https://www.youtube.com/watch?v=TNhaISOUy6Q&ab_channel=Fireship
// https://forum.freecodecamp.org/t/react-how-to-fetch-data-from-express-without-using-router/401486

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'admin',
  database : 'dummy_db',
  port: "3306"
});

connection.connect(function(err) {
  if(err) throw err;
  console.log("Connected to database!");
});


app.get('/hello', function (req, res) {
   // here u can run queries
   // INSERT, UPDATE
    let sql = "CREATE TABLE rooms (Room_id INT NOT NULL UNIQUE AUTO_INCREMENT, Room_nr INT NOT NULL UNIQUE, Room_size VARCHAR(1) NOT NULL, Room_booked INT NOT NULL, Priority_nr INT, Room_ready INT, Room_ready_time DATETIME, Room_start_time DATETIME, Cleaner_reponsible VARCHAR(45) UNIQUE, PRIMARY KEY (Room_id))";
    connection.query(sql, function(err, result) {
      if (err) throw console.log('Error while creating table ' + err)
      console.log('Table "rooms" created')
    })
  res.send('hello world')
});


app.get('/topics')
  
app.listen(5000)
