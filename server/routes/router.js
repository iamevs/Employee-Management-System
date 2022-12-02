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
            console.log("user deleted");
        }
    });
    connection.query(`DELETE FROM ems.job_department WHERE emp_id = '${emp_id}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("user deleted");
        }
    });
    connection.query(`DELETE FROM ems.salary WHERE emp_id = '${emp_id}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("user deleted");
        }
    }
    );
    connection.query(`DELETE FROM ems.qualification WHERE emp_id = '${emp_id}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("user deleted");
        }
    }
    );
}

router.delete('/deleteuser/:emp_id', (req, res) => {

    const id = req.params.emp_id;
    deleteuser(id);
});

router.get('/induser/:mobile', (req, res) => {
    const id = req.params.mobile;
    // console.log(id);
    connection.query(`SELECT * FROM employe.emp_details WHERE mobile = ${id}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            // console.log(result);
        }
    });
    // connection.query(`SELECT * FROM employe.emp_details WHERE mobile = '1'`, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         // res.send(result);
    //         console.log(result);
    //     }
    // });
    // console.log(id);
});

// router.patch('/updateuser/:mobile', (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const work = req.body.work;
//     const mobile = req.body.mobile;
//     const desc = req.body.desc;
//     const age = req.body.age;
//     connection.query(`UPDATE employe.emp_details SET name = '${name}', email = '${email}', work = '${work}', mobile = '${mobile}', des = '${desc}', age = ${age} WHERE mobile = ${mobile}`, (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//             console.log("data updated");
//         }
//     });
// })

router.patch('/updateuser/:mobile', (req, res) => {
    const id = req.params.mobile;

    const data = req.body;

    connection.query(`UPDATE employe.emp_details SET ? WHERE mobile = ${id}`, data, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log("data updated");
        }
    });

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