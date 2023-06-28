import React, {useEffect} from "react";
import {Box, CircularProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getAllCampaigns} from "../../business/redux/reducers/campaign/actions";
import {DataGrid} from "@mui/x-data-grid";
import {columns} from "../campaigns/columns";
import {InformationModal} from "../../components";


export const Campaigns = () => {
    const dispatch = useDispatch()

    const state = useSelector(state => state);

    useEffect(() => {
        dispatch(getAllCampaigns())
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
    console.log(state)

    return (
        <Box sx={{height: 700, width: '100%'}}>
            <button> Create Campaign</button>
            <DataGrid
                rows={ state.campaigns?.list || [] }
                columns={ columns }
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    )
}
