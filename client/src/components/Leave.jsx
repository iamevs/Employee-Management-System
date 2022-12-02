import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { adddata } from './context/ContextProvider';

var link = "http://localhost:8001/leavecreate";

const Register = () => {

    const { udata, setUdata } = useContext(adddata);

    const history = useNavigate();

    const [inpval, setINP] = useState({
        name: "",
        id: "",
        fromdate: 0,
        todate:0 ,
        desc: ""
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

        const { name, fromdate, todate , id, desc} = inpval;


        if (name == "") {
            alert("name is required")
        } else if (fromdate == "") {
            alert("date is required")
        } else if (id == "") {
            alert("emp id is required")
        }  else {

            const res = await fetch(link, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, fromdate,todate, id, desc
                })
            });

            const data = await res.json();
            console.log(data);

            if (res.status === 422 || !data) {
                console.log("error ");
                alert("error");

            } else {
                history("/");
                // setUdata(data2)
                // console.log("data added");

            }
        }

    }

    return (
        <div className="container" style={{height: "100vh", overflowY: "scroll"}}>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Employee Id</label>
                        <input type="number" value={inpval.id} onChange={setdata} name="id" class="form-control" id="exampleInputPassword1" />
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
                        <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" onClick={addinpdata} class="btn btn-success text-white tool" style={{width: "200px", marginLeft: "10px"}}>Submit</button>
                    <a href="/" className="btn text-white btn-danger tool" style={{width: "200px", marginLeft: "10px"}}>Discard</a>
                </div>
            </form>
        </div>
    )
}
export default Register;
