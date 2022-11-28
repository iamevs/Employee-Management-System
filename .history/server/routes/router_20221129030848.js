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

    connection.query(`insert into employe.emp_details (name,email,work,mobile,des,age) values ('${name}','${email}','${work}','${mobile}','${desc}',${age});`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("data inserted");
        }
    });
});

router.get("/getusers", (req, res) => {
    connection.query("SELECT * FROM employe.emp_details", (err, result) => {
        if (err) {
            res.status(422).json("no data");
        } else {
            // res.send(result);
            res.status(201).json(result);
        }
    });
})


router.delete('/deleteuser/:id', (req, res) => {
    
    const id = req.params.mobile;
    connection.query(`DELETE FROM employe.emp_details WHERE mobile = ${id}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("data deleted");
        }
    });
});

module.exports = router;