const express = require('express');
const router = new express.Router();
const { connection } = require('../database/connection');

router.post('/create', (req, res) => {
    // const { name, email, work, mobile, desc, age } = req.body;
    const name = req.body.name;
    const email = req.body.email;
    const work = req.body.work;
    const mobile = req.body.mobile;
    const desc = req.body.desc;
    const age = req.body.age;

    connection.query(`insert into employe.emp_details (name,email,work,mobile,desc,age) values ('${name}','${email}','${work}','${mobile}','${desc}','${age}');`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
    // connection.query(`insert into employe.emp_details (name,email) values ('${name}','${email}');`, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.status(201).send(result);
    //         res.status(201).send("success");
    //     }
    // });

});

module.exports = router;