import React from 'react';
import PropTypes from 'prop-types';
import './ProfessionSelectButton.scss';

//assets
import smallRightArrow from '../../../assets/img/small-right-arrow.svg';

// add name, 
function ProfessionSelectButton({ handleClick, professionName, children }) {
    return (
        <button
            className="profession-container"
            onClick={handleClick}
            value={professionName}
        >
            <div>
                <div id="physician" className="img-rounded-container" />
            </div>
            <div className="profession-description-container">
                <div className="profession-title-container">
                    <h3 className="profession-title">{professionName}</h3>
                    <img className="select-indicator" src={smallRightArrow} alt="A small right arrow" />
                </div>
                <p>
                    {children}
                </p>
            </div>
        </button>
    )
}

export default ProfessionSelectButton;

ProfessionSelectButton.defaulProps = {
    handleClick: () => null,
    professionName: '',
    children: '',
}

ProfessionSelectButton.propTypes = {
    handleClick: PropTypes.func,
    professionName: PropTypes.string,
    children: PropTypes.string,
}