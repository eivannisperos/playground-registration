import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import ProfessionSelection from './ProfessionSelection';
import Profession from './Profession';
import PhysicianForm from './physician/PhysicianForm';

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

    console.log(profession + ' ' + 'Current step: ' + currentStep);

    //perhaps should only keep track of steps?
    function handleEvent(event) {
        event.preventDefault();
        setCurrentStep(currentStep + 1);
        setProfession(event.currentTarget.value);
    }

    // functions to keep track of the number of steps
    // do we even need this in the master form?
    // if we were to keep track of the initial number
    // need to heavily modify these functions to take into account for:
    // 1. keeping track of steps for the progress bar
    // 2. what profession is selected
    function next() {
        currentStep >= 2 ? setCurrentStep(3) : setCurrentStep(currentStep + 1);
    }

    function prev() {
        currentStep <= 1 ? setCurrentStep(1) : setCurrentStep(currentStep - 1);
    }

    function displayForm(step) {
        switch (step) {
            case 1:
                return <Profession
                    setProfession={handleEvent}
                    nextStep={next}
                />
            case 2:
                return <PhysicianForm
                    nextStep={next}
                    prevStep={prev}
                />
        }
    }

    //each form should be a form of its own,
    //values determined by each onSubmit function
    return (
        <div className={classes.form}>
            {displayForm(currentStep)}
        </div>
    )

}

export default MasterForm;