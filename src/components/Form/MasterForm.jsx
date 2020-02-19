import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Profession from './Profession';
import PhysicianForm from './PhysicianForm/PhysicianForm';
import Introduction from '../Pages/Introduction';
import ProfessionSelection from './ProfessionSelection/ProfessionSelection';

const styles = makeStyles(theme => ({
    form: {
        margin: 'auto',
    }
}));

function MasterForm({ props }) {
    const classes = styles();
    const [currentStep, setCurrentStep] = useState('profession-process');
    const [profession, setProfession] = useState('physician');

    console.log(profession + ' ' + 'Current step: ' + currentStep);

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
        setCurrentStep(event.currentTarget.value);
    }

    function setProfessionForm(event) {
        event.preventDefault();
        setProfession(event.currentTarget.value);
        setCurrentStep('profession-process');
    }

    function determineProfessionForm(prof) {
        switch (prof) {
            case 'physician':
                return <PhysicianForm
                    prevStep={switchForms}
                />
            case 'medical student':
                return <h1>Medical Student</h1>
            case 'health care professional':
                return <h1>Health Care Professional</h1>
            case 'administrator':
                return <h1>Administrator</h1>
        }
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
                    nextStep={setProfessionForm}
                />
            case 'profession-process':
                return determineProfessionForm(profession)
            case 'finish':
                return <h1>Finish</h1>
        }
    }

    //each form should be a form of its own,
    //values determined by each onSubmit function
    return (
        displayForms(currentStep)
    )

}

export default MasterForm;