import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllLeads} from "../../business/redux/reducers/leads/actions";
import {openModal} from "../../business/redux/reducers/modal/actions";
import {Box, CircularProgress, Container, Grid} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {columns} from './constants';
import {InformationModal} from "../../components";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MdPhone from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import FilterIcon from '@mui/icons-material/Filter';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import Badge from '@mui/material/Badge';
import {FilterContent, CallCampaignContent} from "../../components/modal/informationModal/contents";

export const AssignedLeads = () => {

    const dispatch = useDispatch()

    const state = useSelector(state => state);

    useEffect(() => {
        dispatch(getAllLeads())
    }, [])

    if (state.loading.isLoading) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <CircularProgress/>
            </Box>
        )
    }

    return (
        <Box sx={{width: '100%,'}}>
            <Container  maxWidth="false"  style={{backgroundColor: '#EBECF0',padding:'5px 8px'}} >
                <Grid container direction="row"  alignItems="center" >
                    <Grid item container direction="row" xs={9} sx={{p:1}} alignItems="center" >
                        <Button sx={{mr:1}} className="Campaign_btn" onClick={() => dispatch(
                            openModal ({
                                content: <CallCampaignContent />
                            })
                        )}><MdPhone sx={{mr:1,fontSize:'20px'}}/> call campaign
                        </Button>
                        <Button sx={{mr:1}} className="Campaign_btn"><MailIcon sx={{mr:1,fontSize:'20px'}}/> sms campaign
                        </Button>
                        <Button sx={{mr:1}} className="Campaign_btn"><MailIcon sx={{mr:1,fontSize:'20px'}}/> email campaign
                        </Button>
                        <Typography variant="h6" color="#A8ADB0" component="span" fontStyle="italic" fontWeight="400" >
                            To create a campaign, filter the leads first
                        </Typography>
                    </Grid>
                    <Grid item container direction="row" xs={3} sx={{p:1}} alignItems="center" justifyContent="flex-end">
                        <Button sx={{mr:1}} className="Campaign_btn" ><ViewColumnIcon sx={{mr:1,fontSize:'20px'}}/> columns
                        </Button>
                        <Button sx={{mr:0}} className="Campaign_btn" onClick={() => dispatch(
                            openModal ({
                                content: <FilterContent />
                            })
                        )}><Badge badgeContent={4} color="primary" sx={{mr:2}} className="filter_count"><FilterIcon sx={{mr:1,fontSize:'20px'}}/></Badge> filters
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            <DataGrid
                rows={state.leads?.default?.list || []}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 20,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />

            <InformationModal isOpen={state.modalData?.isOpen} content={state.modalData?.content}/>
        </Box>
    )
}
