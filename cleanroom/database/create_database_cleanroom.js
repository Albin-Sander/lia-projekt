const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('connected, YES');
});

connection.query("CREATE DATABASE dummy_db", function (err, result) {
    if (err) throw err;
    console.log("Database created!");
});

