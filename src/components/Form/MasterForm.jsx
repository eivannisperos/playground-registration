import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Profession from './Profession';
import PhysicianForm from './physician/PhysicianForm';
import Introduction from '../Pages/Introduction';
import ProfessionSelection from './profession-select/ProfessionSelection';

const styles = makeStyles(theme => ({
    form: {
        margin: 'auto',
    }
}));

function MasterForm({ props }) {
    const classes = styles();
    const [currentStep, setCurrentStep] = useState('profession-select');
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
    // function next() {
    //     currentStep >= 2 ? setCurrentStep(3) : setCurrentStep(currentStep + 1);
    // }

    function switchForms(event) {
        event.preventDefault();
        // sets the pro
        setCurrentStep(event.currentTarget.value);
    }

    function displayForms(step) {
        switch (step) {
            case 'intro':
                return <Introduction
                nextStep={switchForms}
                />
            case 'profession-select':
                return <ProfessionSelection
                prevStep={switchForms}
                 />
            case 'finish':
                return <h1>Finish</h1>
        }
    }

    //each form should be a form of its own,
    //values determined by each onSubmit function
    return (
        <div>
            {displayForms(currentStep)}
        </div>
    )

}

export default MasterForm;