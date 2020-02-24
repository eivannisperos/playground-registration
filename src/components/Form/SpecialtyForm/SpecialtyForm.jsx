import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfessionSelectButton from '../../Buttons/ProfessionSelectButton/ProfessionSelectButton';
import Button from '../../Buttons/Button/Button';
import './SpecialtyForm.scss';
import Input from '../../Input/Input';

function SpecialtyForm({ next, saveSpec, savedSpec }) {
    const [specialty, setSpecialty] = useState('');

    function handleChange(event) {
        setSpecialty(event.target.value);
    }

    function nextStep(event) {
        event.preventDefault();
        saveSpec(specialty);
        next();
    }

    //TODO: make datalist a child so that any datalist can be plugged in.
    //TODO: make ProfessionSelectButton interchangebale with other professions
    return (
        <div>
            <div className="specialty-title-container">
                <h2>I consider myself a ...</h2>
                <ProfessionSelectButton
                    professionName='physician'
                >
                    I'm trained and liscenced to practice medicine.
                </ProfessionSelectButton>
            </div>

            <form className="specialty-form-container">
                <h2>Specializing in ...</h2>
                <Input
                    label="Select a specialty"
                    type="text"
                    list="physician-specialty"
                    value={specialty}
                    getInputVal={handleChange}
                    placeholder="eg. General Practice"
                />
                <datalist id="physician-specialty">
                    <option>General Medicine</option>
                    <option>Pediatrics</option>
                    <option>Family Medicine</option>
                    <option>Gynaecology</option>
                    <option>Dermatology</option>
                    <option>Neurology</option>
                </datalist>
                <Button
                    type="submit"
                    handleClick={nextStep}
                    value="Submit"
                    variant={specialty == '' ? "secondary" : "primary"}
                >
                    {
                        specialty == '' ? "Skip for now" : "Continue"
                    }
                </Button>
            </form>
        </div>
    )
}

export default SpecialtyForm;

SpecialtyForm.defaultProps = {
    nextStep: () => null,
    saveSpec: () => null,
}

SpecialtyForm.propTypes = {
    nextStep: PropTypes.func,
    saveSpec: PropTypes.func,
}