var sql = require('mysql2');
// import sql from 'mysql2';

// import data from '../client/src/data/Json.json';

const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employe',
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

// export default connection;