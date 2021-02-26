const mysql = require('mysql');
const express = require("express")
const cors = require('cors');
//const bodyParser = require('body-parser');
const app = express()

app.use(cors());
app.use(express.json());
//app.use(bodyParser);

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

  res.json({
    status: 200,
    message: "Success"
  })
  return 
});

app.post('/validation', function (req, res) {
  const user = req.body;
  const sqlQuery = `SELECT * FROM users WHERE User_name='${user.user_name}' AND User_password='${user.user_password}'`
  console.log(user)
    connection.query(sqlQuery, function (err, result, fields) {
      if (err) throw err;
      if (result.length == 0) {
        res.json({
          status: 401,
          message: "Unathorized"
        })
      } else {
        //res.redirect('/?userid=' + result[0]);
        res.json({
          status: 200,
          message: "Success validating",
          result: result
        })
        return
      }
    });
    /*connection.query(`SELECT * FROM users WHERE User_name='${user.user_name}' AND User_password='${user.user_password}'` , function(error, result) {
    if (error) throw error;
 
      console.log('I think it worked... ')
      console.log(result[0].User_id)
      let data = result

      res.send(data)
      return
    
      // row not found, do stuff...
     // do other stuff...
  })*/
});



app.get('/rooms', function(req, res) {
  const sqlQuery = `SELECT * FROM rooms`
    connection.query(sqlQuery, function (err, result) {
      if (err) throw err;
      if (result.length == 0) {
        res.json({
          status: 401,
          message: "Could not get rooms"
        })
      } else {
        res.json({
          status: 200,
          message: "Success",
          result: result
        })
        return
      }
    });
})
  
app.listen(5000)
