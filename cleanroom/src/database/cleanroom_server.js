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


app.get('/', function (req, res) {
  // here u can run queries
  // INSERT, UPDATE

  // USERS TABLE
  let drop_users= "DROP TABLE users"
  connection.query(drop_users, function(err, result) {
    if (err) throw err
    console.log('Table "users" was droped')
  })

  let create_users = "CREATE TABLE users (User_id INT NOT NULL UNIQUE AUTO_INCREMENT, User_name VARCHAR(45) NOT NULL, User_phone INT NOT NULL, User_occupation VARCHAR(45) NOT NULL, PRIMARY KEY (User_id))";
  connection.query(create_users, function(err, result) {
    if (err) throw err
    console.log('Table "users" created')
    console.log('-------------')
    console.log('Recreation of table present to prevent conflict')
  })

  let insert_users = "INSERT INTO users (User_name, User_phone, User_occupation) VALUES ('Carl Hanssen', '00100100', 'Receptionist'), ('Fredrick Rogers', '11111111', 'Housekeeper'), ('Sophia Mansen', '22222222', 'Housekeeper'), ('Gloria Borg', '33333333', 'Housekeeper')"
  connection.query(insert_users, function(err, result) {
    if (err) throw err
    console.log('Dummy data was inserted into table "users"')
    console.log('-------------')
  })

  // ROOMS TABLE
  let drop_rooms = "DROP TABLE rooms"
    connection.query(drop_rooms, function(err, result) {
      if (err) throw err
      console.log('Table "rooms" was droped')
  })

  let create_rooms = "CREATE TABLE rooms (Room_id INT NOT NULL UNIQUE AUTO_INCREMENT, Room_nr INT NOT NULL UNIQUE, Room_size VARCHAR(1) NOT NULL, Room_booked INT NOT NULL, Priority_nr INT, Room_ready INT, Room_ready_time DATETIME, Room_start_time DATETIME, Cleaner_reponsible VARCHAR(45) UNIQUE, PRIMARY KEY (Room_id))";
    connection.query(create_rooms, function(err, result) {
      if (err) throw err
      console.log('Table "rooms" created')
      console.log('-------------')
      console.log('Recreation of table present to prevent conflict')
  })

  let insert_rooms = "INSERT INTO rooms (Room_nr, Room_size, Room_booked, Priority_nr, Room_ready) VALUES ('01', 'S', '0', '1', '0'), ('02', 'S', '0', '1', '0'), ('03', 'M', '0', '1', '0'), ('04', 'M', '0', '1', '0'), ('05', 'M', '0', '1', '0'), ('06', 'L', '0', '1', '0')"
  connection.query(insert_rooms, function(err, result) {
    if (err) throw err
    console.log('Dummy data was inserted into table "rooms"')
    console.log('-------------')
  })

  return
});

app.get('/validation', async function (req, res) {
  const user = await req.query.param;
  $result = connection.query("SELECT * FROM users WHERE User_name = '"+user+"'", function(err, result) {
    if (err) {
      let data = 0
      return data
    }
      console.log('I think it worked... ')
      console.log(result[0].User_id)
      let data = result

      res.send(data)
      return result
      // row not found, do stuff...
     // do other stuff...
  })
})


app.get('/topics')
  
app.listen(5000)
