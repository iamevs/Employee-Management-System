import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Stack } from "@mui/material";


const Navbar = () => {
    return (
        <Stack justifyContent={"center"} direction={"row"}>
            <Box justifyContent={"space-between"} className="navbar navbar-expand-lg text-white" sx={{
                backgroundColor: "transparent",
                backdropFilter: "blur(10px) !important",
                position: "relative",
                color: "white",
                boxShadow: "4px 7px 20px 11px rgb(0 0 0 / 20%)",
                height: "60px",
                padding: "0 40px 0 40px",
                width: "auto",
                borderRadius: "10px"
            }}>
                <Box sx={{
                    fontSize: "20px",
                    textShadow: "3px 4px 12px #6c757d",
                    fontWeight: "bold",
                    marginRight: "10px"
                }}>Employee management Dashboard</Box>
                <Box>
                    <a href="/home" style={{
                        color: "white",
                        fontSize: "20px",
                        textShadow: "3px 4px 12px #6c757d",
                        fontWeight: "bold",
                        textDecoration: "none",
                    }}>Home</a>
                </Box>
            </Box>
        </Stack>
    )
}

export default Navbar
