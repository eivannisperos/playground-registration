import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import InputError from './InputError/InputError';


//placeholder, list are optional props
function Input({ name,
    label,
    value,
    type,
    setInputVal,
    getInputVal,
    onChange,
    placeholder,
    list,
    variant,
    required,
    errorMsg }) {

    function handleError() {
        if (errorMsg.length > 0) {
            return (
            <InputError>{errorMsg}</InputError>
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
                name={name}
                className={variant}
                type={type}
                list={list}
                value={value}
                onChange={getInputVal}
                placeholder={placeholder}
                autoComplete="on" />
        </div>

    )
}

Input.defaultProps = {
    name: '',
    label: 'Type something',
    type: 'text',
    placeholder: 'Type something here',
    list: '',
    variant: 'custom-input',
    required: false,
    errorMsg: '',
}

Input.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    getInputVal: PropTypes.func.isRequired,
    variant: PropTypes.string,
    list: PropTypes.node,
    required: PropTypes.bool,
    errorMsg: PropTypes.string,
}

export default Input;

