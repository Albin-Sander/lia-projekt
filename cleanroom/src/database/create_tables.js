const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "admin",
    database: "dummy_db",
    port: "3306"
});


let create_users = "CREATE TABLE IF NOT EXISTS users (User_id INT NOT NULL UNIQUE AUTO_INCREMENT, User_name VARCHAR(45) NOT NULL UNIQUE, User_password VARCHAR(45) NOT NULL, User_phone INT NOT NULL, User_occupation VARCHAR(45) NOT NULL, PRIMARY KEY (User_id))";
connection.query(create_users, function(err, result) {
    if (err) throw err
    console.log('Table "users" created')
    console.log('-------------')
})

let create_rooms = "CREATE TABLE IF NOT EXISTS rooms (Room_id INT NOT NULL UNIQUE AUTO_INCREMENT, Room_nr INT NOT NULL UNIQUE, Room_size VARCHAR(1) NOT NULL, Room_booked INT NOT NULL, Priority_nr INT, Room_ready INT, Room_ready_time DATETIME, Room_start_time DATETIME, Cleaner_reponsible VARCHAR(45) UNIQUE, PRIMARY KEY (Room_id))";
connection.query(create_rooms, function(err, result) {
    if (err) throw err
    console.log('Table "rooms" created')
    console.log('-------------')
});


let insert_users = "INSERT INTO users (User_name, User_password, User_phone, User_occupation) VALUES ('Carl Hanssen', '123', '00100100', 'Receptionist'), ('Fredrick Rogers', '1234', '11111111', 'Housekeeper'), ('Sophia Mansen', '12345', '22222222', 'Housekeeper'), ('Gloria Borg', '123456', '33333333', 'Housekeeper')"
connection.query(insert_users, function(err, result) {
    if (err) throw err
    console.log('Dummy data was inserted into table "users"')
    console.log('-------------')
})

let insert_rooms = "INSERT INTO rooms (Room_nr, Room_size, Room_booked, Priority_nr, Room_ready) VALUES ('01', 'S', '0', '1', '0'), ('02', 'S', '0', '1', '0'), ('03', 'M', '0', '1', '0'), ('04', 'M', '0', '1', '0'), ('05', 'M', '0', '1', '0'), ('06', 'L', '0', '1', '0')"
connection.query(insert_rooms, function(err, result) {
    if (err) throw err
    console.log('Dummy data was inserted into table "rooms"')
    console.log('-------------')
})

connection.end()