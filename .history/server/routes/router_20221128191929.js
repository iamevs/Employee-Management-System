const express = require('express');
const router = new express.Router();
const { connection } = require('../database/connection');

router.post('/create', (req, res) => {
    // const { name, email, work, mobile, desc, age } = req.body;
    const name = req.body.name;
    const email = req.body.email;

    connection.query(`insert into employe.emp_details (name,email) values ('${name}','${email}');`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.status(201).send(result);
            res.status(201).send("success");
        }
    });

});

module.exports = router;