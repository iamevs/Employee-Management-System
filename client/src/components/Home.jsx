import React, { useState, useEffect, useContext } from 'react'
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider'
import ReactTooltip from 'react-tooltip';

var getuserlink = "http://localhost:8001/getusers";
var deleteuserlink = "http://localhost:8001/deleteuser";


const Home = () => {

    const [getuserdata, setUserdata] = useState([]);

    console.log(getuserdata);

    const { udata, setUdata } = useContext(adddata);

    const { updata, setUPdata } = useContext(updatedata);

    const { dltdata, setDLTdata } = useContext(deldata);

    const getdata = async () => {

        const res = await fetch(getuserlink, {
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
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (emp_id) => {

        const res2 = await fetch(`${deleteuserlink}/${emp_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            setDLTdata(deletedata)
            getdata();
        }
        
    }


    return (

        <>
            {
                udata ?
                    <>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{udata.name}</strong>  added succesfully!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            {
                updata ?
                    <>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong>  updated succesfully!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }

            {
                dltdata ?
                    <>
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{dltdata.name}</strong>  Employee Fired 💔!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }



            <div className="container" style={{ width: "100%" }}>

                <h2 style={{
                    marginTop: "30px",
                    fontSize: "2.5rem",
                    color: "#000",
                    fontWeight: "600",
                    marginBottom: "20px",
                    // textShadow: "-10px 10px 15px rgba(0, 0, 0, 0.8)"
                }}><span style={{ fontSize: "40px", textShadow: "#6c757d 4px 2px 8px" }} data-tip="Employees list">👷</span> <ReactTooltip/></h2>
                <div className="add_btn mt-2 mb-2" style={{marginTop: "30px"}}>
                    <NavLink to="/register" className="btn tool btn-success" style={{ marginRight: "40px" }}>Add data</NavLink>
                </div>

                <div className='table-responsive' style={{
                    backgroundColor: "transparent",
                    backdropFilter: "blur(10px) !important",
                    // position: "relative",
                    // color: "#ADDDD0",
                    boxShadow: "rgb(0 0 0 / 20%) 0px 1px 20px 0px",
                    borderRadius: "10px",
                    padding: "20px",
                    height: "80vh",
                    // margin: "40px",
                    width: "100%",
                    overflowY: "scroll", 

                }}>
                    <table class="table">
                        <thead>
                            <tr className="table" style={{
                                fontSize: "20px",
                                // color: "#ADDDD0",
                                // filter: "drop-shadow(2px 4px 6px black)",
                            }}>
                                <th scope="col">s.no</th>
                                <th scope="col">Employee Id</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Email</th>
                                <th scope="col">age</th>
                                <th scope="col">Tools</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                getuserdata.map((val, ind) => {
                                    return (
                                        <tr className=''>
                                            <th scope="row">{ind + 1}</th>
                                            <td>{val.emp_id}</td>
                                            <td>{val.fname} {val.lname}</td>
                                            <td>{val.email}</td>
                                            <td>{val.age}</td>
                                            <td className='btns'>
                                                <NavLink to={`/view/${val.emp_id}`} className="btn tool" data-tip="More Details"><ReadMoreRoundedIcon /></NavLink>
                                                <NavLink to={`/edit/${val.emp_id}`} className="btn  tool" data-tip="Edit Details"><NoteAltOutlinedIcon /></NavLink>
                                                <button onClick={() => deleteuser(val.emp_id)} className="btn  tool" data-tip="Fire Employee"><DeleteOutlineIcon /></button>
                                                <ReactTooltip />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home

















