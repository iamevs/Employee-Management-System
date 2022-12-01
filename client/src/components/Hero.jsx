import { Box, Card, Stack } from "@mui/material";
import React from "react";

const Hero = () => {
    return (
        <Stack justifyContent={"center"} alignContent={"center"} sx={{
            height: "100vh",
            width: "100%",
            flexWrap: "wrap",
        }}>
            <Card sx={{
                padding: "2rem",
            }}>
                <h1>hero</h1>
            </Card>
        </Stack>
    );
}

export default Hero;