import React from 'react';
import PropTypes from 'prop-types';
import './BackButton.scss';
import backButton from '../../../assets/img/left-arrow.svg';

function BackButton({ handleClick, destination }) {
    return (
        <button
            type="button"
            className="button-back"
            onClick={handleClick}
            value={destination}
        >
            <img src={backButton} alt="A left arrow" />
        </button>
    )
}

export default BackButton;

BackButton.defaultProps = {
    destination: '',
}

BackButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    destniation: PropTypes.string,
}