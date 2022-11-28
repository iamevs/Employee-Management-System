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
            }}>
            <Box sx={{
                fontSize: "20px",
                textShadow: "2px 2px 2px #000000",
            }}>Employee-management-Dashboard</Box>
            </Box>
        </Stack>
    )
}

export default Navbar
