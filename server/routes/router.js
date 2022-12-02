const { json } = require('express');
const express = require('express');
const router = new express.Router();
const { connection } = require('../database/connection');

router.post('/create', (req, res) => {
    // const { name, email, work, mobile, desc, age } = req.body;
    const emp_id = req.body.emp_id;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const gender = req.body.gender;
    const age = req.body.age;
    const add = req.body.add;
    const email = req.body.email;
    const pass = req.body.pass;
    const job_dept = req.body.job_dept;
    const job_name = req.body.job_name;
    const job_description = req.body.job_description;
    const salary_range = req.body.salary_range;
    const amount = req.body.amount;
    const bonus = req.body.bonus;
    const position = req.body.position;
    const requirements = req.body.requirements;
    const date_in = req.body.date_in;
    const annual = amount * 12;

    // INSERT INTO `ems`.`employee` (`emp_id`, `fname`, `lname`, `gender`, `age`, `add`, `email`, `pass`) VALUES ('101', 'abc', 'abc', 'male', '21', 'xyz', 'xyz@xyz', 'xyz');
    connection.query(`insert into ems.employee (emp_id, fname, lname, gender, age, address, email, pass) values ('${emp_id}', '${fname}', '${lname}', '${gender}', '${age}', '${add}', '${email}', '${pass}');`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("data added to employee table");
        }
    });
    connection.query(`insert into ems.job_department(emp_id, job_dept, name, description, salary_range) values ('${emp_id}', '${job_dept}', '${job_name}' , '${job_description}', '${salary_range}')`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("data added to job_department table");
        }
    });
    connection.query(`insert into ems.salary(emp_id, amount, anual, bonus) values ( '${emp_id}', '${amount}', '${annual}', '${bonus}')`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("data added to salary table");
        }
    });
    connection.query(`insert into ems.qualification(emp_id, position, requirements, date_in) values ('${emp_id}', '${position}', '${requirements}', '${date_in}')`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("data added to qualification table");
        }
    });
});

router.get("/getusers", (req, res) => {
    connection.query("SELECT * FROM ems.employee", (err, result) => {
        if (err) {
            res.status(422).json("no data");
        } else {
            // res.send(result);
            res.status(201).json(result);
        }
    });
})

function deleteuser(emp_id) {
    connection.query(`DELETE FROM ems.employee WHERE emp_id = '${emp_id}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("user deleted from employee table");
        }
    });
    connection.query(`DELETE FROM ems.job_department WHERE emp_id = '${emp_id}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("user deleted from job_department table");
        }
    });
    connection.query(`DELETE FROM ems.salary WHERE emp_id = '${emp_id}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("user deleted from salary table");
        }
    }
    );
    connection.query(`DELETE FROM ems.qualification WHERE emp_id = '${emp_id}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("user deleted from qualification table");
        }
    }
    );
}

router.delete('/deleteuser/:emp_id', (req, res) => {

    const id = req.params.emp_id;
    deleteuser(id);
});

function induser(emp_id, res) {
    connection.query(`SELECT * FROM ems.employee WHERE( emp_id = '${emp_id}')`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            // console.log("user found in employee table");
            // json(result);
            // let data = result;
            res.status(201).json(result);
        }

    });
    // connection.query(`SELECT job_dept FROM ems.job_department WHERE emp_id = '${emp_id}'`, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         // console.log("user found in job_department table");
    //         // res.status(201).json(result);
    //         // const js = JSON.stringify(result);
    //         // res.status(201).json(result);

    //     }
    // });
    // connection.query(`SELECT date_in FROM ems.qualification WHERE (emp_id = '${emp_id}')`, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         // console.log("user found in qualification table");
    //         res.status(201).json(result);
    //     }
    // });
}

router.get('/induser/:emp_id', (req, res) => {
    const id = req.params.emp_id;
    induser(id, res);
    // connection.query(`SELECT * FROM ems.employee WHERE( emp_id = '${id}')`, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         // console.log("user found in employee table");
    //         res.send(result);
    //     }
    // });
});

router.get('/induserjob/:emp_id', (req, res) => {
    const id = req.params.emp_id;
    connection.query(`SELECT * FROM ems.job_department WHERE emp_id = '${id}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            // res.status(201).json(result);
            res.send(result);
            console.log("user found in job_department table");
        }
    });
});


function updateuser(emp_id, data) {
    connection.query(`UPDATE ems.employee SET ? WHERE (emp_id = '${emp_id}')`, data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("user updated in employee table");
        }
    });
}

router.patch('/updateuser/:emp_id', (req, res) => {
    const id = req.params.emp_id;

    const data = req.body;

    updateuser(id, data);

});

router.post('/leavecreate/', (req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    const fromdate = req.body.fromdate;
    const todate = req.body.todate;
    const reason = req.body.desc;

    const totaldays = Math.floor((Date.parse(todate) - Date.parse(fromdate)) / 86400000) + 1;
    console.log(totaldays);

    // connection.query(`insert into employe.leave_details (id,name,days,reason) values ('${id}','${name}','${date}','${reason}');`, (err, result) => {
    //     if (err) {
    //         console.log(err);

    //     } else {
    //         res.send(result);
    //         console.log("data inserted");
    //     }
    // });
});

module.exports = router;