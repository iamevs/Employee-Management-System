import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'


var indlink = 'http://localhost:8001/induser/'
var editlink = 'http://localhost:8001/updateuser/'


const Edit = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { updata, setUPdata } = useContext(updatedata)

    const history = useNavigate("");

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


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`${indlink}${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });


        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data[0])
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, []);


    function redirectfunc() {
        // wait for 5 seconds and then redirect to the home page
        setTimeout(() => {
            history("/");
            setUPdata([...updata, inpval]);
        }, 100);
    }


    const updateuser = async (e) => {
        e.preventDefault();

        const {
            emp_id, fname, lname, gender, age, add, email, pass, job_dept, job_name, job_description, salary_range, amount, bonus, position, requirements, date_in
        } = inpval;

        redirectfunc();

        const res2 = await fetch(`${editlink}${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emp_id, fname, lname, gender, age, add, email, pass, job_dept, job_name, job_description, salary_range, amount, bonus, position, requirements, date_in
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 422 || !data2) {
            alert("fill the data");
        } else {
            history("/");
            setUPdata(data2);
        }

    }

    return (
        <div className="container">
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
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Employee Id</label>
                        <input type="number" value={inpval.emp_id} onChange={setdata} name="emp_id" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12" style={{ marginTop: 35 }}>
                        <label for="exampleInputEmail1" class="form-label" style={{ marginRight: 10 }}>Gender</label>
                        {/* <input type="dropdown" value={inpval.gender} onChange={setdata} name="gender" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                        <select name="selectList" id="selectList" style={{ borderRadius: "5px", padding: 2 }}>
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
                        <input type="text" value={inpval.address} onChange={setdata} name="add" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="text" value={inpval.pass} onChange={setdata} name="pass" class="form-control" id="exampleInputPassword1" />
                    </div>
{/* 
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
 */}
                    <button type="submit" onClick={updateuser} class="btn btn-success tool" style={{ width: "200px", marginLeft: "10px" }}>Submit</button>
                    <a href="/" className="btn text-white btn-danger tool" style={{ width: "200px", marginLeft: "10px" }}>Discard</a>
                </div>
            </form>
        </div>
    )
}

export default Edit;





