import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input/Input';
import Button from '../../Buttons/Button/Button';

import './InfoForm.scss';

//TODO
//form validate to ensure all of inputs have been filled in
//if not, set advance button to disabled and unclickable
function InfoForm({ getInfo, next, saveInfo }) {
    const [userInfo, setUserInfo] = useState({
        firstname: getInfo.firstname,
        lastname: getInfo.lastname,
        country: getInfo.country,
        province: getInfo.province,
        city: getInfo.city,
        password: getInfo.password
    }); 

    const [validStatus, setValidStatus] = useState({
        firstname: inputErrorMessages.required,
        lastname: inputErrorMessages.required,
        country: inputErrorMessages.required,
        province: inputErrorMessages.required,
        city: inputErrorMessages.required,
        password: inputErrorMessages.required,
    })

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        Object.keys(userInfo).map(field => {
            updateValidStatus(field, userInfo[field]);
        })
        updateFormValid(checkFormValid());
    }, [userInfo])

    function saveInformation() {
        saveInfo(userInfo);
        next();
    }

    // checks to see if there are any more
    // errors present
    // returns underfined if there are no messages left
    // returns false whatsover when re-loadeded (????)
    function checkFormValid() {
        const check = Object.keys(validStatus).map(msg => {
            //console.log(`${validStatus[msg]} ${validStatus[msg].length}`)
            return validStatus[msg].length > 0 ? false : true;
        }).find(bool => bool === false);
        return check === undefined;
    }

    function updateFormValid(status) {
        setFormValid(status);
    }

    function updateValidStatus(field, value) {
        setValidStatus({
            ...validStatus,
            [field]: setValidateMessage(field, value)
        })
    }

    function updateUserInfo(event) {
        const { name, value } = event.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });

        updateValidStatus(name, value);
    }

    //VALIDATE FIELDS HERE
    //Might be a better way to approach
    function setValidateMessage(field, value) {
        switch (field) {
            case 'firstname':
                if (value.length == 0) {
                    return inputErrorMessages.required;
                } else {
                    return ''
                }
            case 'lastname':
                if (value.length == 0) {
                    return inputErrorMessages.required;
                } else {
                    return ''
                }
            case 'country':
                if (value.length == 0) {
                    return inputErrorMessages.required;
                } else {
                    return ''
                }
            case 'province':
                if (value.length == 0) {
                    return inputErrorMessages.required;
                } else {
                    return ''
                }
            case 'city':
                if (value.length == 0) {
                    return inputErrorMessages.required;
                } else {
                    return ''
                }
            case 'password':
                if (value.length == 0) {
                    return inputErrorMessages.required;
                } else {
                    return ''
                }
            default:
                return inputErrorMessages.required;
        }
    }

    return (
        <div>
            <h2>I am ...</h2>
            <Input
                name="firstname"
                label="First Name"
                type="text"
                placeholder="ex. John"
                value={userInfo.firstname}
                getInputVal={updateUserInfo}
                required
                errorMsg={validStatus.firstname}
            />
            <Input
                name="lastname"
                label="Last Name"
                type="text"
                placeholder="ex. Smith"
                value={userInfo.lastname}
                getInputVal={updateUserInfo}
                required
                errorMsg={validStatus.lastname}
            />
            <Input
                name="country"
                label="Country"
                type="text"
                placeholder="ex. Canada"
                value={userInfo.country}
                getInputVal={updateUserInfo}
                list="country"
                required
                errorMsg={validStatus.country}
            />
            <Input
                name="province"
                label="Province"
                type="text"
                placeholder="ex. Nova Scotia"
                value={userInfo.province}
                getInputVal={updateUserInfo}
                required
                errorMsg={validStatus.province}
            />
            <Input
                name="city"
                label="City"
                type="text"
                placeholder="ex. Halifax"
                value={userInfo.city}
                getInputVal={updateUserInfo}
                required
                errorMsg={validStatus.city}
            />
            <div className="divider"></div>
            <h3>Set a Password</h3>
            <p>
                Passwords must be at least eight (8) characters long. The password must contain at least one number (0-9).
                </p>
            <Input
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password here."
                value={userInfo.password}
                getInputVal={updateUserInfo}
                required
                errorMsg={validStatus.password}
            />
            <Button
                type="submit"
                handleClick={saveInformation}
                disabled={formValid ? false : true}
            >
                Continue
                </Button>
            <datalist id="country">
                <option>Canada</option>
                <option>United States of America</option>
            </datalist>
        </div>

    )
}
export default InfoForm;

InfoForm.defaultProps = {
    next: () => null,
    saveInfo: () => null,
    getInfo: {}
}

InfoForm.propTypes = {
    next: PropTypes.func,
    saveInfo: PropTypes.func,
    getInfo: PropTypes.object,
}


const inputErrorMessages = {
    required: 'This is a required field.',
    invalidChar: 'This contains invalid characters.',
    invalidFormat: 'This contains '
}