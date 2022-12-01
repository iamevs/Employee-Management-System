require('dotenv').config();

const express = require('express');
const app = express();
const sql = require('mysql2');
const cors = require('cors');

require('./database/connection');
const router = require('./routes/router');

const port = 8001;


//middleware
app.use(cors());
app.use(express.json());

app.use(router);


app.listen(port, () => console.log(`App listening on port ${port}!`));
