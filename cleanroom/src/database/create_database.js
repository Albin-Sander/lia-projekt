const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "admin",
    port: "3306"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected, YES');
});

connection.query("CREATE DATABASE IF NOT EXISTS dummy_db", function (err, result) {
    if (err) throw err;
    console.log("Database created!");
});

connection.end()
