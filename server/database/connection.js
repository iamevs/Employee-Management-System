const sql = require('mysql2');

const connection = sql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

// connection.query("insert into employe.emp_details (name) values ('test');");

// connection.query("SELECT * FROM ems.employee;", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
// });

exports.connection = connection;