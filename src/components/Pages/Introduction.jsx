import React from 'react';
import PropTypes from 'prop-types';
import './Introduction.scss';
import smallLogo from '../../assets/img/graphic-logo.svg';
import Button from '../Buttons/Button/Button';

function Introduction({ nextStep }) {
    return (
        <div className="introduction-container">
            <div>
                <img src={smallLogo} alt="The Rounds logo" />
            </div>
            <div>
                <h1>Welcome to The Rounds!</h1>
                <p>
                    We're excited to have you on The Rounds. Our team will need to verify your information, so please make sure it is accurate and up-to-date. <b>First, introduce yourself.</b>
                </p>
            </div>
            <Button
                type="button"
                destination="profession-select"
                handleClick={nextStep}
            >
                Let's get started
            </Button>
        </div>

    )
}

export default Introduction;

Introduction.defaultProp = {
    nextStep: () => null,
}

Introduction.propTypes = {
    nextStep: PropTypes.func,
}