const express = require('express');
const app = express();
const sql = require('mysql2');
const cors = require('cors');

require('./database/connection');

const port = 3000;


//middleware
app.use(cors());
app.use(express.json());


app.listen(port, () => console.log(`App listening on port ${port}!`));
