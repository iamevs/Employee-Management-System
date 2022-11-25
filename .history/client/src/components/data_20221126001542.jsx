import React from 'react';
import connection from '../../../server';

function Data() {

    connection.query(`insert into emp_details (id, name) value (2, 'test');`);

    // connection.query('SELECT * FROM emp_details', function (err, rows, fields) {
    //     if (err) throw err;
    //     // console.log('Database connected');
    // });

    return (
        <div>
            <h1>Hi</h1>
        </div>
    )
}

export default Data;
