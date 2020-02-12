import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import './Profession.scss';

const styles = makeStyles({
    grid: {
        margin: '2em 0',
    }
})

function Profession({ getValue }) {
    const classes = styles();

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);
    }

    return (
        <div>
            <div className="titles-form-component-header">
                <h1>Welcome to The Rounds!</h1>
                <h2>What do you do?</h2>
                <p>Select one that best describes you:</p>
            </div>
            <form onSubmit={handleSubmit}>
                <Grid
                    className={classes.grid}
                    container
                    spacing={3}>
                    <Grid item xs={3}>
                        <div className="button-variant-2-btn">
                            <button type="submit" value="physician">
                                <div id="physician" className="img-rounded-container" />
                                <h3>Physician</h3>
                            </button>
                            <a href="#">Learn More</a>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="button-variant-2-btn">
                            <button>
                                <div id="student" className="img-rounded-container" />
                                <h3>Student</h3>
                            </button>
                            <a href="#">Learn More</a>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="button-variant-2-btn">
                            <button>
                                <div id="hcp" className="img-rounded-container" />
                                <h3>Health Care Provider</h3>
                            </button>
                            <a href="#">Learn More</a>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="button-variant-2-btn">
                            <button>
                                <div id="other" className="img-rounded-container" />
                                <h3>Other</h3>
                            </button>
                            <a href="#">Learn More</a>
                        </div>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default Profession;