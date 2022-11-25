
import connection from '../../server';
import './App.css'

function App() {

  connection.query('SELECT * FROM employee', function (err, results, fields) {
    if (err) throw err;
    console.log(results);
  });

  return (
    <>
      <h1>My App</h1>
    </>
  )
}

export default App
