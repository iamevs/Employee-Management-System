import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useNavigate } from 'react-router-dom';

var datailslink = 'http://localhost:8001/induser/';


const Details = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);
    // console.log(id);

    const getdata = async () => {

        // console.log(id);
        console.log(id);

        const res = await fetch(`${datailslink}${id}`, {
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
            setUserdata(data[0])
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])


    return (
        <div className="container mt-3" style={{marginLeft: "20px"}}>
            <h1 style={{ fontWeight: 400 }}>Welcome</h1>

            <Card sx={{ maxWidth: 1000, borderRadius: "10px", boxShadow: "5px 5px 19px 9px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%) !important" }}>
                <CardContent>
                    <div className="row" style={{ padding: "20px" }}>
                        <div className="left_view col-lg-6 col-md-6 col-12" style={{ padding: "20px" }}>
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3" style={{ padding: "2px" }}>Name: <span >{getuserdata.name}</span></h3>
                            <h3 className="mt-3" style={{ padding: "2px" }}>Age: <span >{getuserdata.age}</span></h3>
                            <h3 className="mt-3" style={{ padding: "2px" }}>Email: <span>{getuserdata.email}</span></h3>
                            <h3 className="mt-3" style={{ padding: "2px" }}>Occuption: <span>{getuserdata.work}</span></h3>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12" style={{ padding: "20px", marginTop: "10px" }}>
                            <h3 className="" style={{ padding: "2px" }}>Employee ID: <span>{getuserdata.mobile}</span></h3>
                            <h3 className="mt-3" style={{ padding: "2px" }}>Description: <span>{getuserdata.des}</span></h3>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Details
