import React from 'react';
import connection from '../../../server';

function Data() {

    // connection.query(`insert into emp_details (id, name) value (2, 'test');`);

    // connection.query('SELECT * FROM emp_details', function (err, rows, fields) {
    //     if (err) throw err;
    //     // console.log('Database connected');
    // });

    return (
        <div>
            <h1>Hi</h1>
            {/* <span>${connection.query(`select 8 from employe.emp_details;`)}</span> */}
        </div>
    )
}

export default Data;
