const express = require('express');
const router = new express.Router();
const { connection } = require('../database/connection');

router.post('/create', (req, res) => {
    const {id, name} = req.body;

    if(!id || !name){
        return res.status(422).json({error: "plz fill the data"});
    }
    try{
        connection.query(`INSERT INTO emp_details (id, name) VALUES ('${id}', '${name}')`, (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.status(201).json({message: "data inserted"});
            }
        });
    }catch(err){
        console.log(err);
    }
});

module.exports = router;