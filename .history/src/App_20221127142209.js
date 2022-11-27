import connection from '../server/index.js';
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    // console.log(data);
    connection.query('select * from employe.emp_dettails', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}