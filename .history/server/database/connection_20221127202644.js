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

exports.connection = connection;