import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {animated, useSpring} from '@react-spring/web';
import {useDispatch} from "react-redux";
import {closeModal} from "../../../business/redux/reducers/modal/actions";
import './style.css';


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
                                     content = '',
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
                    {content}
                </Box>
            </Fade>
        </Modal>
    );
}

