import React from 'react';
import PropTypes from 'prop-types';
import smallErrorImg from '../../../assets/img/small-error.svg';
import './InputError.scss';
//TODO: implement working error message
function InputError({ errorMsg, fieldEmpty, children }) {
    return (
        <div className="error-msg">
            <img src={smallErrorImg} alt="A pink circle with an exlaimation mark for warning." />
            <p>{children}</p>
        </div>
    )
}

export default InputError;

InputError.defualtProps = {
    children: '',
}

InputError.propTypes = {
    children: PropTypes.node,
}