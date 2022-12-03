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

var leavelink = 'http://localhost:8001/induserleave/';


const Leavedetails = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    // console.log(id);
    // console.log(id);

    const getdata = async () => {

        // console.log(id);
        
        const res = await fetch(`${leavelink}${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(id + "hi");
        
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
        <div className="container mt-3" >
            <Card sx={{ maxWidth: "auto", borderRadius: "10px", marginRight: 15 }}>
                <CardContent>
                    <div className="row">
                        <h3 style={{ fontWeight: 600, margin: "20px 0 20px 0" }}>leave details Details</h3>
                        <div className="left_view col-lg-6 col-md-6 col-12" style={{ padding: "20px" }}>
                            <h3>Total number of days of leave : <span> {getuserdata.days}</span> </h3>
                            <h3>Reason for leave : <span> {getuserdata.reason}</span> </h3>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12" style={{ padding: "20px", marginTop: "10px" }}>
                            <h3>Start date : <span> {getuserdata.fromdate}</span> </h3>
                            <h3>End date : <span> {getuserdata.todate}</span> </h3>
                        </div>
                    </div>
                </CardContent>
            </Card>
            {/* <a href="/" className="btn tool" style={{ width: "auto", margin: "10px 0 0 0", color: "#000", backgroundColor: "#fff" }}>Back</a> */}

        </div>
    )
}

export default Leavedetails