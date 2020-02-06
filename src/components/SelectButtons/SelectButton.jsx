import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import ModalButton from '../Modal/ModalButton';

import revealPWImg from '../../assets/img/reveal-text.png';
import alertImg from '../../assets/img/alert.png';

const styles = makeStyles(theme => ({
    button: {
        display: 'flex',
        position: 'relative',
        width: '100%',
        padding: '0',
    },
    buttonDescription: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: 'inherit',
        textAlign: 'left',
        padding: '1em',
    },
    buttonImg: {
        margin: 'auto',
    },
    closeButton: {
        top: '0px',
        right: '0px',
        backgroundColor: 'transparent',
        border: 'none',
        fontFamily: 'Proxima N W01 Bold',
        fontSize: '20px',
        margin: '.5em'
    },
    container: {
        margin: '1.5em 0em',
        display: 'flex',
        background: '#F6F6F6',
        borderRadius: '10px',
        transition: 'background 0.2s ease-out',
        '&:hover': {
            background: '#EEEEEE',
            cursor: 'pointer',
        }
    }
}));

function SelectButton({
    buttonImg,
    imgDescription,
    buttonName,
    buttonDescription,
    onClick
}) {
    const classes = styles();

    return (
        <div className={classes.container}>
            <button onClick={onClick} className={classes.button}>
                <Grid container spacing={0}>
                    <Grid
                        item xs={10}
                        className={classes.buttonDescription}
                    >
                        <h2>{buttonName}</h2>
                        <p>{buttonDescription}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <img
                            src={buttonImg}
                            alt={imgDescription}
                            className={classes.buttonImg}
                        />
                    </Grid>
                </Grid>
            </button>
            <ModalButton>
                <div>
                    <img src={alertImg} />
                    <h1>Health Care Providers</h1>
                    <p>
                        As a non-physician, you need to be affiliated with one of our partnered organizations. Otherwise, you may not be able to continue with the registration process.
                    </p>
                </div>
            </ModalButton>
        </div>

    )
}

export default SelectButton;

SelectButton.defaultProps = {
    buttonName: 'Button Name',
    buttonDescription: 'Description of what the button does.',
}

SelectButton.propTypes = {
    buttonImg: PropTypes.string.isRequired,
    buttonDescription: PropTypes.string.isRequired,
    buttonName: PropTypes.string,
    buttonDescription: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}