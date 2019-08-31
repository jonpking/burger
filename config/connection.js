const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "jsftj8ez0cevjz8v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "okn8s8ir3391z9do",
    password: "kqbf02xyqat5uv8m",
    database: "p1cs6jrnqepqzjxv"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
