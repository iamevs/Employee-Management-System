import React from 'react';
import connection from '../../../server';

function Data() {
    connection.query('SELECT * FROM emp_details', function (err, rows, fields) {
        if (err) throw err;
        console.log(rows);
    });

    return (
        <div>
            <h1>Hi</h1>
        </div>
    )
}

export default Data;
