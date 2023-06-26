import {NavLink} from "react-router-dom";
import {Box, Container, Grid, Typography} from "@mui/material";
import React from "react";

export const JobDateFilterContent = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <Typography variant="h2" component="div" fontWeight="700" color="#2B3033" textTransform="capitalize">
                Job date
            </Typography>
            <Typography  variant="h6" component="div" fontWeight="400" fontStyle="italic" color="#A8ADB0">
                Choose a time range by selecting one of the shortcuts below, or enter a custom time range in the calendar fields.
            </Typography>
        </Box>
    )
}