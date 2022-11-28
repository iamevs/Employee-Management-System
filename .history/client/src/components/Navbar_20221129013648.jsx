import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Stack } from "@mui/material";


const Navbar = () => {
    return (
        // <Stack justifyContent={"center"} direction={"row"} marginTop={"10px"}>
        //     <Box justifyContent={"space-between"} alignItems={"center"} className="navbar navbar-expand-lg text-white" sx={{
        //         backgroundColor: "transparent",
        //         backdropFilter: "blur(10px) !important",
        //         position: "relative",
        //         color: "white",
        //         boxShadow: "4px 7px 20px 11px rgb(0 0 0 / 20%)",
        //         height: "60px",
        //         padding: "0 40px 0 40px",
        //         width: "auto",
        //         borderRadius: "10px"
        //     }}>
        //         <Box sx={{
        //             fontSize: "1.5rem",
        //             color: "#ADDDD0",
        //             fontWeight: "600",
        //             textShadow: "-10px 10px 15px rgba(0, 0, 0, 0.8)",
        //             marginRight: "100px"
        //         }}>Employee management Dashboard</Box>
        //         <Box direction={"row"}>
        //             <a href="/home" style={{
        //                 fontSize: "1.5rem",
        //                 color: "#ADDDD0",
        //                 fontWeight: "600",
        //                 textShadow: "-10px 10px 15px rgba(0, 0, 0, 0.8)",
        //                 textDecoration: "none",
        //             }}>Home</a>
        //             <a href="/" style={{
        //                 fontSize: "1.5rem",
        //                 color: "#ADDDD0",
        //                 fontWeight: "600",
        //                 textShadow: "-10px 10px 15px rgba(0, 0, 0, 0.8)",
        //                 textDecoration: "none",
        //                 marginLeft: "20px"
        //             }}>Docs</a>

        //         </Box>
        //     </Box>
        // </Stack>
        <Stack direction={"column"} justifyContent={"center"} sx={{
            backgroundColor: "transparent",
            backdropFilter: "blur(10px) !important",
            position: "relative",
            color: "white",
            boxShadow: "4px 7px 20px 11px rgb(0 0 0 / 20%)",
            height: "80vh",
            width: "300px",
            borderRadius: "10px",
            marginTop: "10vh"
        }}>
            <Box>
                Dashboard
            </Box>
        </Stack>
    )
}

export default Navbar
