import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvmobileer'


const Edit = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

   const {updata, setUPdata} = useContext(updatedata)

    const history = useNavigate("");

    const [inpval, setINP] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
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


    const { mobile } = useParams("");
    console.log(mobile);



    const getdata = async () => {

        const res = await fetch(`/induser/${mobile}`, {
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


    const updateuser = async(e)=>{
        e.preventDefault();

        const {name,email,work,mobile,desc,age} = inpval;

        const res2 = await fetch(`/updateuser/${mobile}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,email,work,mobile,desc,age
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            history.push("/")
            setUPdata(data2);
        }

    }

    return (
        <div className="container">
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" mobile="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" mobile="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">age</label>
                        <input type="text" value={inpval.age} onChange={setdata} name="age" class="form-control" mobile="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" mobile="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Work</label>
                        <input type="text" value={inpval.work} onChange={setdata} name="work" class="form-control" mobile="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" mobile="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;





