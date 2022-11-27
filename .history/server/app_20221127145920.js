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

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
