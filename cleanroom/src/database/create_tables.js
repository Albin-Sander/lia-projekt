const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "admin",
    database: "dummy_db",
    port: "3306"
});


let create_users = "CREATE TABLE users (User_id INT NOT NULL UNIQUE AUTO_INCREMENT, User_name VARCHAR(45) NOT NULL, User_phone INT NOT NULL, User_occupation VARCHAR(45) NOT NULL, PRIMARY KEY (User_id))";
connection.query(create_users, function(err, result) {
    if (err) throw err
    console.log('Table "users" created')
    console.log('-------------')
    console.log('Recreation of table present to prevent conflict')
})

let create_rooms = "CREATE TABLE rooms (Room_id INT NOT NULL UNIQUE AUTO_INCREMENT, Room_nr INT NOT NULL UNIQUE, Room_size VARCHAR(1) NOT NULL, Room_booked INT NOT NULL, Priority_nr INT, Room_ready INT, Room_ready_time DATETIME, Room_start_time DATETIME, Cleaner_reponsible VARCHAR(45) UNIQUE, PRIMARY KEY (Room_id))";
connection.query(create_rooms, function(err, result) {
    if (err) throw err
    console.log('Table "rooms" created')
    console.log('-------------')
    console.log('Recreation of table present to prevent conflict')
});