import {useDispatch} from "react-redux";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {closeModal} from "../../../../../business/redux/reducers/modal/actions";
import * as React from "react";
import {FilterTabs} from "./tabPanel";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export const FilterContent = () => {
    const dispatch = useDispatch();
    return (
        <>
            <Box id="filter-modal-title" sx={{ p: 3,background:'#F4F5F8' }} direction="row" display="flex" justifyContent="space-between">
                <Badge badgeContent={3} color="primary" sx={{mr:2}} className="filter_count_shadow">
                    <Typography id="filter-modal-title" variant="h1" component="div" fontWeight="700" color="#2B3033">
                        Filters
                    </Typography>
                </Badge>
                <Button variant="outlined" color="error" className="remove_all_filters" sx={{py:0}} startIcon={<HighlightOffIcon />}>
                    Remove all filters
                </Button>
            </Box>
            <FilterTabs/>
            <Stack id="filter-modal-footer" sx={{ py:'10px',px: 2,background:'#F4F5F8' }} display="flex" direction="row" justifyContent="space-between">
                <Button onClick={() => dispatch(closeModal())} variant="contained" className="cancle_modal_btn">Cancel</Button>
                <Button variant="contained" className="view_results_btn">View results</Button>
            </Stack>
        </>
    )
}

