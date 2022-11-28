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

// connection.query("insert into employe.emp_details (name) values ('test');");

// connection.query("SELECT * FROM employe.emp_details", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
// });

exports.connection = connection;