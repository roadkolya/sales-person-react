import {NavLink} from "react-router-dom";
import {Box, Container, Grid, Typography} from "@mui/material";
import React from "react";

export const HeaderNavigationSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "#F4F5F8",
                boxShadow:'0 7px 15px rgba(0,0,0,0.03)',

            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="row" justifyContent="center">
                    <Typography color="#2B3033" variant="h3" fontWeight="500" textTransform="uppercase" className="tab_link">
                        <NavLink to={'/assigned-leads'}>Leads</NavLink>
                    </Typography>
                    <Typography color="#2B3033" variant="h3" fontWeight="500" textTransform="uppercase" className="tab_link">
                        <NavLink to={'/campaigns'}>Campaigns</NavLink>
                    </Typography>
                    <Typography color="#2B3033" variant="h3" fontWeight="500" textTransform="uppercase" className="tab_link">
                        <NavLink to={'/templates'}>Templates</NavLink>
                    </Typography>
                </Grid>
            </Container>
        </Box>
    )
}