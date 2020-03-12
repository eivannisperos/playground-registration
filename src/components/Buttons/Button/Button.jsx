import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

//TODO
//have a disabled state, cursor disabled

function Button({ type, destination, children, variant, disabled, handleClick }) {
    return (
        <button
            type={type}
            onClick={handleClick}
            value={destination}
            className={`btn ${variant}`}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button;

Button.defaultProps = {
    type: 'button',
    destination: '',
    children: 'Click me!',
    variant: 'primary',
    disabled: false,
    handleClick: () => null,
}

Button.propTypes = {
    type: PropTypes.string,
    destination: PropTypes.string,
    children: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    handleClick: PropTypes.func,
}