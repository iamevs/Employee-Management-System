import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { adddata } from './context/ContextProvider';

var link = "http://localhost:8001/leavecreate";

const Leave = () => {

    const { setldata, udata, setUdata } = useContext(adddata);

    const history = useNavigate();

    const [inpval, setINP] = useState({
        emp_id: "",
        fromdate: "",
        todate:"",
        reason: "",
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

        const { emp_id, fromdate, todate , reason} = inpval;


        // if (emp_id == "") {
        //     alert("name is required")
        // } else if (fromdate == "") {
        //     alert("date is required")
        // } else if (id == "") {
        //     alert("emp id is required")
        // }  else {
            const res = await fetch(link, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    emp_id, fromdate, todate , reason
                })
            });

            const data = await res.json();
            console.log(data);

            if (res.status === 422 || !data) {
                console.log("error ");
                alert("error");

            } else {
                history("/");
                setldata(data)
                // console.log("data added");

            // }
        }

    }

    return (
        <div className="container" style={{height: "100vh", overflowY: "scroll"}}>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Employee Id</label>
                        <input type="number" value={inpval.emp_id} onChange={setdata} name="emp_id" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">From</label>
                        <input type="date" value={inpval.fromdate} onChange={setdata} name="fromdate" class="form-control"/>
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">To</label>
                        <input type="date" value={inpval.todate} onChange={setdata} name="todate" class="form-control"/>
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Reason</label>
                        <textarea name="reason" value={inpval.reason} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" onClick={addinpdata} class="btn btn-success text-white tool" style={{width: "200px", marginLeft: "10px"}}>Submit</button>
                    <a href="/" className="btn text-white btn-danger tool" style={{width: "200px", marginLeft: "10px"}}>Discard</a>
                </div>
            </form>
        </div>
    )
}
export default Leave;
