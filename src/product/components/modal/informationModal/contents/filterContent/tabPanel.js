import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {JobDateFilterContent} from "./JobDateFilterContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {LastPropsalSentFilterContent} from "./lastPropsalSentFilterContent";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
export const FilterTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            id="filter-modal-description"  sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',height:'calc(100% - 132px)'}}
        >
            <Tabs

                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Filter Tab"
                className="Filter_Tab"
                indicatorColor="transparent"
                sx={{background: '#EBECF0',p:2,minWidth:'320px'}}
            >
                <Tab sx={{py:0,px:2,mb:1}} className="filter_tab_btn" label="Job date" {...a11yProps(0)} />
                <Tab sx={{py:0,px:2,mb:1}} className="filter_tab_btn" label="Last proposal sent" {...a11yProps(1)} />
                <Tab sx={{py:0,px:2,mb:1}} className="filter_tab_btn" label=" Last communication date" {...a11yProps(2)} />
                <Tab sx={{py:0,px:2,mb:1}} className="filter_tab_btn" label="Source" {...a11yProps(3)} />
                <Tab sx={{py:0,px:2,mb:1}} className="filter_tab_btn" label="Created date" {...a11yProps(4)} />
                <Tab sx={{py:0,px:2,mb:1}} className="filter_tab_btn" label="Move type" {...a11yProps(5)} />
                <Tab sx={{py:0,px:2,mb:1}} className="filter_tab_btn" label="AM / PM" {...a11yProps(6)} />
                <Tab sx={{py:0,px:2,mb:1}} className="filter_tab_btn" label="Branch" {...a11yProps(7)} />
                <Tab sx={{py:0,px:2,mb:1}} className="filter_tab_btn" label="Shipment size" {...a11yProps(8)} />
                <Tab sx={{py:0,px:2,mb:1}} className="filter_tab_btn" label="Office" {...a11yProps(9)} />
                <Tab sx={{py:0,px:2}} className="filter_tab_btn" label="Stage" {...a11yProps(10)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <JobDateFilterContent/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <LastPropsalSentFilterContent/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                Last communication date
            </TabPanel>
            <TabPanel value={value} index={3}>
                Source
            </TabPanel>
            <TabPanel value={value} index={4}>
                Created date
            </TabPanel>
            <TabPanel value={value} index={5}>
                Move type
            </TabPanel>
            <TabPanel value={value} index={6}>
                AM / PM
            </TabPanel>
            <TabPanel value={value} index={7}>
                Branch
            </TabPanel>
            <TabPanel value={value} index={8}>
                Shipment size
            </TabPanel>
            <TabPanel value={value} index={9}>
                Office
            </TabPanel>
            <TabPanel value={value} index={10}>
                Stage
            </TabPanel>
        </Box>
    );
}