import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import ProfessionSelection from './ProfessionSelection';
import Profession from './Profession';

const styles = makeStyles(theme => ({
    form: {
        width: '100%',
        maxWidth: '600px',
        margin: 'auto',
        padding: '1em',
    }
}));

function MasterForm({ props }) {
    const classes = styles();
    const [currentStep, setCurrentStep] = useState(1);
    const [profession, setProfession] = useState(null);

    //perhaps should only keep track of steps?
    function handleEvent(event) {
        event.preventDefault();
        setCurrentStep(currentStep + 1);
        setProfession(event.currentTarget.value);
    }

    // functions to keep track of the number of steps
    function next() {
        currentStep >= 2 ? setCurrentStep(3) : setCurrentStep(currentStep + 1);
    }

    function prev() {
        currentStep <= 1 ? setCurrentStep(1) : setCurrentStep(currentStep - 1);
    }

    //each form should be a form of its own,
    //vakyes determined by each onSubmit function
    return (
        <div className={classes.form}>
            <p>Current step: {currentStep}</p>
            <p>Profession selected: {profession}</p>
            <h1>Welcome to The Rounds!</h1>
            <Profession
                setProfession={handleEvent}
                nextStep={next}
            />
        </div>
    )

}

export default MasterForm;