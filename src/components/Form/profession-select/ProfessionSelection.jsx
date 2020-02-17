import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import './ProfessionSelection.scss';

import backButton from '../../../assets/img/left-arrow.svg';
import smallRightArrow from '../../../assets/img/small-right-arrow.svg';

function ProfessionSelection({ nextStep, prevStep }) {
    return (
        <div className="profession-form">
            <button
                type="back"
                className="button-back"
                onClick={prevStep}
                value="intro"
            >
                <img src={backButton} alt="A left arrow" />
            </button>
            <h2>I consider myself a ...</h2>
            <Grid
                container
                spacing={2}
            >
                <Grid
                    item xs={12} md={6}
                >
                    <button
                        className="profession-container"
                        onClick={nextStep}
                        value="physician"
                    >
                        <div>
                            <div id="physician" className="img-rounded-container" />
                        </div>
                        <div className="profession-description-container">
                            <div className="profession-title-container">
                                <h3>Physician</h3>
                                <img className="select-indicator" src={smallRightArrow} alt="A small right arrow" />
                            </div>
                            <p>
                                I'm a trained and liscenced to practice medicine
                            </p>
                        </div>
                    </button>
                </Grid>
                <Grid
                    item xs={12} md={6}
                >
                    <button
                        className="profession-container"
                        onClick={nextStep}
                        value="student"
                    >
                        <div>
                            <div id="student" className="img-rounded-container" />
                        </div>
                        <div className="profession-description-container">
                            <div className="profession-title-container">
                                <h3>Medical Student</h3>
                                <img className="select-indicator" src={smallRightArrow} alt="A small right arrow" />
                            </div>
                            <p>
                                I'm currently attending medical school.
                            </p>
                        </div>
                    </button>
                </Grid>
                <Grid
                    item xs={12} md={6}
                >
                    <button
                        className="profession-container"
                        onClick={nextStep}
                        value="hcp"
                    >
                        <div>
                            <div id="hcp" className="img-rounded-container" />
                        </div>
                        <div className="profession-description-container">
                            <div className="profession-title-container">
                                <h3>Health Care Professional</h3>
                                <img className="select-indicator" src={smallRightArrow} alt="A small right arrow" />
                            </div>
                            <p>
                                I'm a professional within the medical space.
                            </p>
                        </div>
                    </button>
                </Grid>
                <Grid
                    item xs={12} md={6}
                >
                    <button
                        className="profession-container"
                        onClick={nextStep}
                        value="admin">
                        <div>
                            <div id="other" className="img-rounded-container" />
                        </div>
                        <div className="profession-description-container">
                            <div className="profession-title-container">
                                <h3>Administrator</h3>
                                <img className="select-indicator" src={smallRightArrow} alt="A small right arrow" />
                            </div>
                            <p>
                                I represent an organization.
                            </p>
                        </div>
                    </button>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfessionSelection;

ProfessionSelection.defaultProps = {
    nextStep: () => null,
    prevStep: () => null,
}

ProfessionSelection.propTypes = {
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
}