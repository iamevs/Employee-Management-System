import React, { useState, useEffect, useContext } from 'react'
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider'
import ReactTooltip from 'react-tooltip';

var getuserlink = "http://localhost:8001/getusers";


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

    const deleteuser = async (id) => {

        const res2 = await fetch(`/deleteuser/${id}`, {
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
                            <strong>{dltdata.name}</strong>  deleted succesfully!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }


            <div className="mt-5">
                <div className="container">

                    <h2 style={{
                        marginTop: "30px", 
                        fontSize: "2.5rem",
                        color: "#3a86ff",
                        fontWeight: "600",
                        marginBottom: "20px",
                        textShadow: "-10px 10px 15px rgba(0, 0, 0, 0.8)"
                    }}>Employee list <span style={{ fontSize: "40px" }}>👷</span> </h2>
                    <div className="add_btn mt-2 mb-2">
                        <NavLink to="/register" className="btn text-white tool">Add data</NavLink>
                    </div>

                    <div className='table-responsive' style={{
                        backgroundColor: "transparent",
                        backdropFilter: "blur(10px) !important",
                        // position: "relative",
                        color: "white",
                        boxShadow: "4px 7px 20px 11px rgb(0 0 0 / 20%)",
                        borderRadius: "10px",
                        padding: "20px",
                        height: "auto",
                        margin: "40px"
                    }}>
                        <table class="table">
                            <thead>
                                <tr className="table text-white col-6" style={{
                                    fontSize: "20px",
                                }}>
                                    <th scope="col">Id</th>
                                    <th scope="col">UserName</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Job</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Tools</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    getuserdata.map((val, ind) => {
                                        return (
                                            <tr className='text-white'>
                                                <th scope="row">{ind + 1}</th>
                                                <td>{val.name}</td>
                                                <td>{val.email}</td>
                                                <td>{val.work}</td>
                                                <td>{val.mobile}</td>
                                                <td className='btns'>
                                                    <NavLink to={`/view/${val._id}`} className="btn text-white tool" data-tip="More Details"><ReadMoreRoundedIcon /></NavLink>
                                                    <NavLink to={`/update/${val._id}`} className="btn text-white tool" data-tip="Edit Details"><NoteAltOutlinedIcon /></NavLink>
                                                    <button onClick={() => deleteuser(val._id)} className="btn text-white tool" data-tip="Fire Employee"><DeleteOutlineIcon /></button>
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
            </div>
        </>
    )
}

export default Home

















