import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import ProfessionSelection from './ProfessionSelection';

const styles = makeStyles(theme => ({
    form: {
        width: '100%',
        maxWidth: '600px',
        margin: 'auto',
    }
}));

function MasterForm({ props }) {
    const classes = styles();
    const [currentStep, setCurrentStep] = useState(1);
    const [profession, setProfession] = useState('');

    function handleEvent(event) {
        event.preventDefault();
        setCurrentStep(currentStep + 1);
        setProfession(profession);
    }

    // functions to keep track of the number of steps
    function next() {
        currentStep >= 2 ? setCurrentStep(3) : setCurrentStep(currentStep + 1);
    }

    function prev() {
        currentStep <= 1 ? setCurrentStep(1) : setCurrentStep(currentStep - 1); 
    }

    return (
        <div className={classes.form}>
            <form onSubmit={handleEvent}>
            </form>
        </div>
    )

}

export default MasterForm;