import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllLeads} from "../../business/redux/reducers/leads/actions";
import {openModal} from "../../business/redux/reducers/modal/actions";
import {Box, CircularProgress} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {columns} from './constants';
import {InformationModal} from "../../components";

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
        <Box sx={{height: 700, width: '100%'}}>

            <button onClick={() => dispatch(
                openModal ({
                    title: 'yfhgfhtgf',
                    header: 'hbjhbjhb',
                    body: 'iuhijhijhiuj'
                })
            )}>Open Modal
            </button>

            <DataGrid
                rows={state.leads?.list || []}
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

            <InformationModal isOpen={state.modalData?.isOpen} headerText={state.modalData?.header}/>
        </Box>
    )
}
