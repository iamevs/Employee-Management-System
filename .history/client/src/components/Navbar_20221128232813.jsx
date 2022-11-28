import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Stack } from "@mui/material";


const Navbar = () => {
    return (
        <Stack >
            <Box className="navbar navbar-expand-lg text-white" sx={{
                backgroundColor: "transparent",
                backdropFilter: "blur(10px) !important",
                position: "relative",
                color: "white",
                boxShadow: "4px 7px 20px 11px rgb(0 0 0 / 20%)",
                height: "60px",
                padding: "0 40px 0 40px",
            }}>
                <Box sx={{
                    fontSize: "20px",
                    textShadow: "3px 4px 12px #6c757d",
                    fontWeight: "bold",
                }}>E-M-D</Box>
                <Box>
                    <a href="/home">Home</a>
                </Box>
            </Box>
        </Stack>
    )
}

export default Navbar
