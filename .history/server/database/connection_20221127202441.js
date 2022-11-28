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