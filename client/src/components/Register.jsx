import React, { useContext, useState } from 'react'
import { NavLink, redirect, useNavigate } from 'react-router-dom'
import { adddata } from './context/ContextProvider';

var link = "http://localhost:8001/create";

const Register = () => {

    const { udata, setUdata } = useContext(adddata);

    const history = useNavigate();

    const [inpval, setINP] = useState({
        emp_id: "",
        fname: "",
        lname: "",
        gender: "male",
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

    function redirectfunc() {
        // wait for 5 seconds and then redirect to the home page
        setTimeout(() => {
            history("/");
            setUdata([...udata, inpval]);
        }, 100);
    }

    const addinpdata = async (e) => {
        e.preventDefault();

        const { emp_id, fname, lname, gender, age, add, email, pass, job_dept, job_name, job_description, salary_range, amount, bonus, position, requirements, date_in } = inpval;


        if (fname == "") {
            alert("first name is required")
        } else if (lname == "") {
            alert("last name is required")
        } else if (emp_id == "") {
            alert("emp id is required")
        } else if (gender == "") {
            alert("gender is required")
        } else if (age == "") {
            alert("age is required")
        } else if (add == "") {
            alert("address is required")
        } else if (email == "") {
            alert("email is required")
        } else if (pass == "") {
            alert("password is required")
        } else if (job_dept == "") {
            alert("job department is required")
        } else if (job_name == "") {
            alert("job name is required")
        } else if (job_description == "") {
            alert("job description is required")
        } else if (salary_range == "") {
            alert("salary range is required")
        } else if (amount == "") {
            alert("amount is required")
        } else if (bonus == "") {
            alert("bonus is required")
        } else if (position == "") {
            alert("position is required")
        } else if (requirements == "") {
            alert("requirements is required")
        } else if (date_in == "") {
            alert("date in is required")
        } else {
            redirectfunc();
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
                history.push("/");
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
                        <label for="exampleInputEmail1" class="form-label" style={{ marginRight: 10 }}>Gender</label>
                        {/* <input type="dropdown" value={inpval.gender} onChange={setdata} name="gender" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                        <select name="selectList" id="selectList" style={{borderRadius: "5px", padding: 2}}>
                            <option value={"male"} onChange={setdata}>Male</option>
                            <option value={"female"} onChange={setdata}>Female</option>
                            <option value={"other"} onChange={setdata}>other</option>
                        </select>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Age</label>
                        <input type="number" value={inpval.age} onChange={setdata} name="age" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" value={inpval.add} onChange={setdata} name="add" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="text" value={inpval.pass} onChange={setdata} name="pass" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Job Department</label>
                        <input type="text" value={inpval.job_dept} onChange={setdata} name="job_dept" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Job Name</label>
                        <input type="text" value={inpval.job_name} onChange={setdata} name="job_name" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Salary/ Annum</label>
                        <input type="text" value={inpval.salary_range} onChange={setdata} name="salary_range" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Salary Amount</label>
                        <input type="number" value={inpval.amount} onChange={setdata} name="amount" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Bonus amount</label>
                        <input type="number" value={inpval.bonus} onChange={setdata} name="bonus" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Position</label>
                        <input type="text" value={inpval.position} onChange={setdata} name="position" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Requirements</label>
                        <input type="text" value={inpval.requirements} onChange={setdata} name="requirements" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Date In</label>
                        <input type="date" value={inpval.date_in} onChange={setdata} name="date_in" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Job Description</label>
                        <textarea type="text" value={inpval.job_description} onChange={setdata} name="job_description" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" onClick={addinpdata} class="btn btn-success text-white tool" style={{ width: "200px", marginLeft: "10px" }}>Submit</button>
                    <a href="/" className="btn text-white btn-danger tool" style={{ width: "200px", marginLeft: "10px" }}>Discard</a>
                </div>
            </form>
        </div>
    )
}
export default Register;
