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


    return (
        <div>
            <form>
                <label>id:</label>
                <input type="text" id="id" placeholder="id" />
                <br/>
                <label>
                    Name:
                    <input type="text" name="name" id='name' />
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            {sub(document.getElementById('id').value, document.getElementById('name').value)}
        </div>
    )
}

export default Data;
