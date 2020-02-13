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

function Profession({ setProfession, nextStep }) {
    const classes = styles();

    return (
        <div>
            <form onSubmit={nextStep}>
                <h1>Welcome to The Rounds!</h1>
                <h2>I consider myself a ...</h2>
                <p>Select one that best describes you:</p>
                <Grid
                    className={classes.grid}
                    container
                    spacing={0}
                    justify='space-between'>
                    <Grid item xs={6} md={3}>
                        <div className="button-variant-2-btn">
                            <button onClick={setProfession} type="submit" value="physician">
                                <div id="physician" className="img-rounded-container" />
                                <h3>Physician</h3>
                            </button>
                            <a href="#">Learn More</a>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <div className="button-variant-2-btn">
                            <button>
                                <div id="student" className="img-rounded-container" />
                                <h3>Student</h3>
                            </button>
                            <a href="#">Learn More</a>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <div className="button-variant-2-btn">
                            <button>
                                <div id="hcp" className="img-rounded-container" />
                                <h3>Health Care Provider</h3>
                            </button>
                            <a href="#">Learn More</a>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={3}>
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

Profession.defaultProps = {
    setProfession: () => null,
    nextStep: () => null,
}

Profession.propTypes = {
    setProfession: PropTypes.func,
    nextStep: PropTypes.func,
}