import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { adddata } from './context/ContextProvider';

var link = "http://localhost:8001/create";

const Register = () => {

    const { udata, setUdata } = useContext(adddata);

    const history = useNavigate();

    const [inpval, setINP] = useState({
        emp_id: "",
        fname: "",
        lname: "",
        gender: "",
        age: "",
        add: "",
        email: "",
        pass: "",
        job_dept: "",
        job_name: "",
        job_description: "",
        salary_range: "",
        amount: "",
        bonus: "",
        position: "",
        requirements: "",
        date_in: "",
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();

        const { emp_id, fname, lname, gender, age, add, email, pass, job_dept, job_name, job_description, salary_range, amount, bonus, position, requirements, date_in } = inpval;

        if (emp_id == "" || fname == "" || lname == "" || gender == "" || add == "" || email == "" || pass == "" || job_dept == "" || job_name == "" || job_description == "" || salary_range == "" || amount == "" || bonus == "" || position == "" || requirements == "" || date_in == "") {
            alert("Fill all details")
        }
        else {
            const res = await fetch(link, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    emp_id, fname, lname, gender, age, add, email, pass, job_dept, job_name, job_description, salary_range, amount, bonus, position, requirements, date_in
                })
            });

            const data = await res.json();
            console.log(data);

            if (res.status === 422 || !data) {
                console.log("error ");
                alert("error");

            } else {
                history("/");
                setUdata(data)
                console.log("data added");

            }
        }

    }

    return (
        <div className="container" style={{ height: "100vh", overflowY: "scroll" }}>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">First name</label>
                        <input type="text" value={inpval.fname} onChange={setdata} name="fname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Last Name</label>
                        <input type="text" value={inpval.lname} onChange={setdata} name="lname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3  col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Employee Id</label>
                        <input type="number" value={inpval.emp_id} onChange={setdata} name="emp_id" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12" style={{marginTop: 35}}>
                        <label for="exampleInputEmail1" class="form-label" style={{marginRight: 10}}>Gender</label>
                        {/* <input type="dropdown" value={inpval.gender} onChange={setdata} name="gender" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                        <select name="selectList" id="selectList" style={{borderRadius: "5px", padding: 2}}>
                            <option value={inpval.gender} onChange={setdata}>Male</option>
                            <option value={inpval.gender} onChange={setdata}>Female</option>
                            <option value={inpval.gender} onChange={setdata}>other</option>
                        </select>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Age</label>
                        <input type="number" value={inpval.age} onChange={setdata} name="age" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" value={inpval.Address} onChange={setdata} name="address" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" value={inpval.pass} onChange={setdata} name="pass" class="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Work</label>
                        <input type="text" value={inpval.work} onChange={setdata} name="work" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" onClick={addinpdata} class="btn btn-success text-white tool" style={{ width: "200px", marginLeft: "10px" }}>Submit</button>
                    <a href="/" className="btn text-white btn-danger tool" style={{ width: "200px", marginLeft: "10px" }}>Discard</a>
                </div>
            </form>
        </div>
    )
}
export default Register;
