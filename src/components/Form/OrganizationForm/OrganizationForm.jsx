import React, { useState } from 'react';
import Input from '../../Input/Input';
import Button from '../../Buttons/Button/Button';


function OrganizationForm() {
    const [org, setOrg] = useState('');
    function getOrganiztion(event) {
        setOrg(event.target.value);
    }

    function add() {
        let org = e.target.value;
    }

    return (
        <div>
            <h2>I am a member of ...</h2>
            <Input
                label="Search an organization ..."
                type="text"
                list="physician-specialty"
                value={org}
                getInputVal={getOrganiztion}
                placeholder="eg. Canadian Medical Association"
            />
            <datalist id="physician-specialty">
                <option>Canadian Medical Association</option>
                <option>Solutions for Kids in Pain</option>
                <option>Society of Rural Physicians of Canada</option>
            </datalist>
            <Button
                type="submit"
                variant={org == '' ? 'secondary' : 'primary'}
            >
                {org == '' ? 'Skip for now' : 'Continue'}
            </Button>
        </div>
    )
}

export default OrganizationForm;