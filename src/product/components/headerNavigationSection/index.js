import {NavLink} from "react-router-dom";
import {Box, Container, Grid, Typography} from "@mui/material";
import React from "react";

export const HeaderNavigationSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "#F4F5F7",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="row" justifyContent="space-between">
                    <Grid item xs={3}></Grid>
                    <Grid item xs={4}>
                        <Grid container direction="row" justifyContent="space-between">
                            <Typography color="black" variant="h5">
                                <NavLink to={'/assigned-leads'}>Leads</NavLink>
                            </Typography>
                            <Typography color="black" variant="h5">
                                <NavLink to={'/campaigns'}>Campaigns</NavLink>
                            </Typography>
                            <Typography color="black" variant="h5">
                                <NavLink to={'/templates'}>Templates</NavLink>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </Container>
        </Box>
    )
}