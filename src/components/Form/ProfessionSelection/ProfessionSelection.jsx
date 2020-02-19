import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import './ProfessionSelection.scss';

import ProfessionSelectButton from '../../Buttons/ProfessionSelectButton/ProfessionSelectButton';
import BackButton from '../../Buttons/BackButton/BackButton';

//TODO: convert scss file to a makeStyles object

function ProfessionSelection({ nextStep, prevStep }) {
    return (
        <div className="profession-form">
            <BackButton 
                handleClick={prevStep}
                destination='intro'
            />
            <h2>I consider myself a ...</h2>
            <Grid
                container
                spacing={2}
            >
                <Grid
                    item xs={12} md={6}
                >
                    <ProfessionSelectButton
                        professionName='physician'
                        handleClick={nextStep}
                    >
                        I'm a trained and liscenced to practice medicine.
                    </ProfessionSelectButton>
                </Grid>
                <Grid
                    item xs={12} md={6}
                >
                    <ProfessionSelectButton
                        professionName='medical student'
                        handleClick={nextStep}
                    >
                        I'm currently attending medical school.
                    </ProfessionSelectButton>
                </Grid>
                <Grid
                    item xs={12} md={6}
                >
                    <ProfessionSelectButton
                        professionName='health care professional'
                        handleClick={nextStep}
                    >
                        I'm a professional within the medical space.
                    </ProfessionSelectButton>
                </Grid>
                <Grid
                    item xs={12} md={6}
                >
                    <ProfessionSelectButton
                        professionName='administrator'
                        handleClick={nextStep}
                    >
                        I represent an organization.
                    </ProfessionSelectButton>
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