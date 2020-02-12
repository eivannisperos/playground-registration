import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import ProfessionSelection from './ProfessionSelection';
import Profession from './Profession';

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
    const [profession, setProfession] = useState(null);

    //perhaps should only keep track of steps?
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

    //each form should be a form of its own,
    //values determined by each onSubmit function
    return (
        <div className={classes.form}>
            <h2>Current step: {currentStep}</h2>
            <h2>Current profession: {profession}</h2>
            <Profession
                getValue={setProfession}
            />
        </div>
    )

}

export default MasterForm;