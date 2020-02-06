import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';

const useStyles = makeStyles(theme => ({
    //modal
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    div: {
        width: '400px',
        height: '600px',
        background: 'white',
        borderRadius: '10px',
    },
    openButton: {
        borderRadius: '5px',
        background: '#0F1029',
        border: 'none',
        color: 'white',
        padding: '0.2em 0.5em',
        transition: 'background 0.2s ease-out',
        '&:hover': {
            background: '#10134A',
            cursor: 'pointer',
        },
        zIndex: '2',
    },
    closeButton: {
        marginLeft: 'auto',
        margin: '1em',
        fontWeight: 'bold',
        fontSize: '20px',
    },
    closeButtonContainer: {
        display: 'flex',
    }
}));


const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    )
});

export default function ModalButton({ children }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div onClick={handleOpen} className={classes.openButton}>
                ?
            </div>
            <Modal
                aria-labelledby="modal-button-title"
                aria-describedby="modal-button-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.div}>
                        <div className={classes.closeButtonContainer}>
                            <button className={classes.closeButton} onClick={handleClose}>X</button>
                        </div>
                        <div className={classes.modalContent}>
                            {children}
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

ModalButton.propTypes = {
    children: PropTypes.node.isRequired,
}

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
}