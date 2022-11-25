import React from 'react';

import connection from '../../../server';

function Data() {

    // connection.query(`insert into emp_details (id, name) value (2, 'test');`);

    // connection.query('SELECT * FROM emp_details', function (err, rows, fields) {
    //     if (err) throw err;
    //     // console.log('Database connected');
    // });

    connection.query('SELECT * FROM emp_details', function (err, rows, fields) {
        if (err) throw err;
        console.log(rows);
    });

    function sub(id, name) {
        connection.query(`insert into emp_details (id, name) value (${id}, ${name});`);
    }

    var data = {
        id: 0,
        name: ''
    }

    return (
        <div>
            {/* form */}
            <form onSubmit={sub(data.id,data.name)}>
                <label>
                    ID:
                    <input type="text" name="id" value={data.id}/>
                </label>
                <label>
                    Name:
                    <input type="text" name="name" value={data.name}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Data;
