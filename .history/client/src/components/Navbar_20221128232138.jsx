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
            }}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-white" to="/">Management App</NavLink>
                </div>
            </Box>
        </Stack>
    )
}

export default Navbar
