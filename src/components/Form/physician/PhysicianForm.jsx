import React from 'react';
import PropTypes from 'prop-types';
import './PhysicianForm.scss';

import backButtonSvg from '../../../assets/img/left-arrow.svg';

function PhysicianForm({ nextStep, prevStep }) {
    return (
        <div>
            <button
                type="button"
                onClick={prevStep}
            >
                <img src={backButtonSvg} alt="A back arrow" />
            </button>
            <div className="button-variant-2-btn">
                <div id="physician" className="img-rounded-container" />
                <h3>Physician</h3>
                <a href="#">Learn More</a>
            </div>
            <div>
                <form onSubmit={nextStep}>
                    <select>
                        <option>Hello</option>
                    </select>
                    <button type="submit" value="continue">
                        CONTINUE
                    </button>
                </form>
            </div>
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