import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './PhysicianForm.scss';
import BackButton from '../../Buttons/BackButton/BackButton';
import SpecialtyForm from '../SpecialtyForm/SpecialtyForm';
import OrganizationForm from '../OrganizationForm/OrganizationForm';

function PhysicianForm({ prevStep }) {
    const [currentStep, setCurrentStep] = useState(1);

    //TODO Set specialty will need to be moved here, since data needs to be available at this level
    const [specialty, setSpecialty] = useState('');

    function next() {
        return currentStep >= 1 ? 1 : setCurrentStep(currentStep + 1);
    }

    function prev(event) {
        return currentStep <= 0 ? prevStep(event) : setCurrentStep(currentStep - 1);
    }

    function saveSpecialty(event) {
        setSpecialty(event);
    }

    function determineFormDisplay(step) {
        switch (step) {
            case 0:
                return <SpecialtyForm
                    next={next}
                    saveSpec={saveSpecialty}
                />
            case 1:
                return <OrganizationForm />
        }
    }

    return (
        <div className="psb-container">
            <BackButton
                handleClick={prev}
                destination='profession-select'
            />
            {determineFormDisplay(currentStep)}
        </div>
    )
}

export default PhysicianForm;

PhysicianForm.defaultProps = {
    nextStep: () => null,
    prevStep: () => null,
}

PhysicianForm.propTypes = {
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
}