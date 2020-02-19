import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import InputError from './InputError/InputError';


//placeholder, list are optional props
function Input({ label,
    value,
    type,
    setInputVal,
    getInputVal,
    onChange,
    placeholder,
    list,
    required }) {

    function handleError() {
        if (required && value=='') {
            return (
                <InputError>Required</InputError>
            )
        }
    }

    return (
        <div>
            <div className="label-errormsg-container">
                <label className="label-select">{label}</label>
                {handleError()}
            </div>
            <input
                className="custom-input"
                type={type}
                list={list}
                value={value}
                onChange={getInputVal}
                placeholder={placeholder} />
        </div>

    )
}

Input.defaultProps = {
    label: 'Type something',
    type: 'text',
    placeholder: 'Type something here',
    list: '',
    required: false,
}

Input.propTypes = {
    lable: PropTypes.string,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    getInputVal: PropTypes.func.isRequired,
    list: PropTypes.node,
    required: PropTypes.bool,
}

export default Input;

