const express = require('express');
const app = express();
const port = 3000;

const sql = require('mysql2');

const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employe'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
