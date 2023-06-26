import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import {useSpring, animated} from '@react-spring/web';
import {useDispatch} from "react-redux";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {closeModal} from "../../../business/redux/reducers/modal/actions";
import {HeaderSection} from "../../headerSection";
import {CircularProgress} from "@mui/material";
import {JobDateFilterContent} from "../..//modal/informationModal/JobDateFilterContent";
const Fade = React.forwardRef(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;
    const style = useSpring({
        from: {opacity: 0},
        to: {opacity: open ? 1 : 0},
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, {onClick})}
        </animated.div>
    );
});

const style = {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '50%',
    maxWidth:'780px',
    height: '100%',
    bgcolor: 'background.paper',
    boxShadow: '-10px 0 30px rgba(0,0,0,0.3)',
    p: 0,
};

export const InformationModal = ({
                                     isOpen = false,
                                     title = '',
                                     headerText = '',
                                     body = ''
                                 }) => {
    const dispatch = useDispatch();

    return (
        <Modal
            aria-labelledby="filter-modal-title"
            aria-describedby="filter-modal-description"
            open={isOpen}
            onClose={() => dispatch(closeModal())}
            closeAfterTransition
            slots={{backdrop: Backdrop}}
            slotProps={{
                backdrop: {
                    TransitionComponent: Fade,
                },
            }}
        >
            <Fade in={isOpen}>
                <Box sx={style}>
                    <Box id="filter-modal-title" sx={{ p: 3,background:'#F4F5F8' }}>
                        <Typography id="filter-modal-title" variant="h1" component="div" fontWeight="700" color="#2B3033">
                            Filters
                        </Typography>
                    </Box>
                    <FilterTabs id="filter-modal-description"/>
                    <Stack id="filter-modal-footer" sx={{ py:'10px',px: 2,background:'#F4F5F8' }} display="flex" direction="row" justifyContent="space-between">
                        <Button variant="contained" sx={{textTransform:'capitalize',fontSize:'14px',color:'#2B3033',bgcolor:'#fff',fontWeight:'500',boxShadow:'0 3px 6px rgba(0,0,0,0.09)'}} >Cancel</Button>
                        <Button variant="contained" sx={{textTransform:'capitalize',fontSize:'14px',bgcolor:'#007BFF',fontWeight:'500',opacity:'30%',boxShadow:'0 3px 6px rgba(0,0,0,0.09)'}}>View results</Button>
                    </Stack>
                </Box>
            </Fade>
        </Modal>
    );
}

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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
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

export default function FilterTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',height:'calc(100% - 132px)'}}
        >
            <Tabs

                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Filter Tab"
                className="Filter_Tab"
                indicatorColor="transparent"
                sx={{bgcolor: '#EBECF0',p:2,minWidth:'320px'}}
            >
                <Tab sx={{fontSize:'15px',lineHeight:'30px',background:'white',textTransform:'capitalize',py:0,px:2,mb:1,color:'#2B3033',boxShadow:'0 7px 15px rgba(0,0,0,0.03)',borderRadius:'10px',minHeight:'40px',alignItems:'start',fontWeight:'400'}}  label="Job date" {...a11yProps(0)} />
                <Tab sx={{fontSize:'15px',lineHeight:'30px',background:'white',textTransform:'capitalize',py:0,px:2,mb:1,color:'#2B3033',boxShadow:'0 7px 15px rgba(0,0,0,0.03)',borderRadius:'10px',minHeight:'40px',alignItems:'start',fontWeight:'400'}} label="Last proposal sent" {...a11yProps(1)} />
                <Tab sx={{fontSize:'15px',lineHeight:'30px',background:'white',textTransform:'capitalize',py:0,px:2,mb:1,color:'#2B3033',boxShadow:'0 7px 15px rgba(0,0,0,0.03)',borderRadius:'10px',minHeight:'40px',alignItems:'start',fontWeight:'400'}} label=" Last communication date" {...a11yProps(2)} />
                <Tab sx={{fontSize:'15px',lineHeight:'30px',background:'white',textTransform:'capitalize',py:0,px:2,mb:1,color:'#2B3033',boxShadow:'0 7px 15px rgba(0,0,0,0.03)',borderRadius:'10px',minHeight:'40px',alignItems:'start',fontWeight:'400'}} label="Source" {...a11yProps(3)} />
                <Tab sx={{fontSize:'15px',lineHeight:'30px',background:'white',textTransform:'capitalize',py:0,px:2,mb:1,color:'#2B3033',boxShadow:'0 7px 15px rgba(0,0,0,0.03)',borderRadius:'10px',minHeight:'40px',alignItems:'start',fontWeight:'400'}} label="Created date" {...a11yProps(4)} />
                <Tab sx={{fontSize:'15px',lineHeight:'30px',background:'white',textTransform:'capitalize',py:0,px:2,mb:1,color:'#2B3033',boxShadow:'0 7px 15px rgba(0,0,0,0.03)',borderRadius:'10px',minHeight:'40px',alignItems:'start',fontWeight:'400'}} label="Move type" {...a11yProps(5)} />
                <Tab sx={{fontSize:'15px',lineHeight:'30px',background:'white',textTransform:'capitalize',py:0,px:2,mb:1,color:'#2B3033',boxShadow:'0 7px 15px rgba(0,0,0,0.03)',borderRadius:'10px',minHeight:'40px',alignItems:'start',fontWeight:'400'}} label="AM / PM" {...a11yProps(6)} />
                <Tab sx={{fontSize:'15px',lineHeight:'30px',background:'white',textTransform:'capitalize',py:0,px:2,mb:1,color:'#2B3033',boxShadow:'0 7px 15px rgba(0,0,0,0.03)',borderRadius:'10px',minHeight:'40px',alignItems:'start',fontWeight:'400'}} label="Branch" {...a11yProps(7)} />
                <Tab sx={{fontSize:'15px',lineHeight:'30px',background:'white',textTransform:'capitalize',py:0,px:2,mb:1,color:'#2B3033',boxShadow:'0 7px 15px rgba(0,0,0,0.03)',borderRadius:'10px',minHeight:'40px',alignItems:'start',fontWeight:'400'}} label="Shipment size" {...a11yProps(8)} />
                <Tab sx={{fontSize:'15px',lineHeight:'30px',background:'white',textTransform:'capitalize',py:0,px:2,mb:1,color:'#2B3033',boxShadow:'0 7px 15px rgba(0,0,0,0.03)',borderRadius:'10px',minHeight:'40px',alignItems:'start',fontWeight:'400'}} label="Office" {...a11yProps(9)} />
                <Tab sx={{fontSize:'15px',lineHeight:'30px',background:'white',textTransform:'capitalize',py:0,px:2,color:'#2B3033',boxShadow:'0 7px 15px rgba(0,0,0,0.03)',borderRadius:'10px',minHeight:'40px',alignItems:'start',fontWeight:'400'}} label="Stage" {...a11yProps(10)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <JobDateFilterContent/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Last proposal sent
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