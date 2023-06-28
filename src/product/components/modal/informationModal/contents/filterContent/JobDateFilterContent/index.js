import React from "react";
import {Box, Typography} from "@mui/material";
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import Button from "@mui/material/Button";

export const JobDateFilterContent = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <Typography sx={{mb: 2}} variant="h2" component="div" fontWeight="700" color="#2B3033"
                        textTransform="capitalize">
                Job date
            </Typography>
            <Typography variant="p" component="div" fontWeight="500" fontStyle="italic" color="#A8ADB0">
                Choose a time range by selecting one of the shortcuts below, or enter a custom time range in the
                calendar fields.
            </Typography>
            <Box display="flex" flexWrap="wrap" sx={{my: 2}}>
                <Button variant="text" className="datePicker_filter_btn" sx={{mb: 2, mr: 1}}>
                    This month
                </Button>
                <Button variant="text" className="datePicker_filter_btn" sx={{mb: 2, mr: 1}}>
                    Last month
                </Button>
                <Button variant="text" className="datePicker_filter_btn" sx={{mb: 2, mr: 1}}>
                    This week
                </Button>
                <Button variant="text" className="datePicker_filter_btn" sx={{mb: 2, mr: 1}}>
                    Last week
                </Button>
                <Button variant="text" className="datePicker_filter_btn" sx={{mb: 2, mr: 1}}>
                    Last 30 days
                </Button>
                <Button variant="text" className="datePicker_filter_btn" sx={{mb: 2, mr: 1}}>
                    Last 7 days
                </Button>
            </Box>
            <Box sx={{flexGrow: 1}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            sx={{mb: 2}}
                            className="date_picker_field"
                            label="From"
                            format="DD, MMMM, YYYY"
                        />
                    </DemoContainer>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            className="date_picker_field"
                            label="To"
                            format="DD, MMMM, YYYY"
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </Box>
        </Box>
    )
}
