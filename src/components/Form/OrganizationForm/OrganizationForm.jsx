import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Input from '../../Input/Input';
import Button from '../../Buttons/Button/Button';
import './OrganizationForm.scss';
import OrganizationWrapper from './OrganizationWrapper/OrganizationWrapper';

//TODO
//need array of two things
//1. available organizations
// - if its already selected, it should not appear here
//2. selected organizations
// - if it is selected, should not be in available organizations
//3. Search funcitonalty broken, need to remove selected array when auto completing
//4. Add a clear-selected function

function OrganizationForm({ next, orgList, saveOrgs, getOrgs }) {
    const [org, setOrg] = useState('');
    const [selectedOrgs, setSelectedOrgs] = useState(getSavedData());
    const [availOrgs, setAvailOrgs] = useState(copyMasterOrgNames);

    function getSavedData() {
        return getOrgs.length > 0 ? getOrgs : [];
    }

    function handleSearch(event) {
        setOrg(event.target.value);
    }

    function saveOrganizations() {
        saveOrgs(selectedOrgs);
        next();
    }

    function copyMasterOrgNames() {
        const copyMasterOrgNames = [];
        for (var i = 0; i < orgList.length; i++) {
            copyMasterOrgNames.push(orgList[i].orgName);
        }
        return copyMasterOrgNames;
    }

    function removeSelectedOrg(event) {
        setAvailOrgs([...availOrgs, event.currentTarget.value]);
        setSelectedOrgs(selectedOrgs.filter(org => org != event.currentTarget.value))
    }

    function addSelectedOrg(event) {
        setSelectedOrgs([...selectedOrgs, event.currentTarget.value]);
        setAvailOrgs(availOrgs.filter(org => org != event.currentTarget.value));
    }

    function renderAvailableOrgs(arr, masterArr, buttonAction) {
        return (
            arr.map(ao => (
                masterArr.map((ma, index) => {
                    if (ma.orgName == ao) {
                        return (
                            <Grid
                                item xs={4}
                                key={index}>
                                <button
                                    onClick={buttonAction}
                                    value={ma.orgName}>
                                    <OrganizationWrapper
                                        img={ma.img}
                                        orgName={ma.orgName}
                                    />
                                </button>
                            </Grid>
                        )
                    }
                }
                )
            ))
        )
    }

    useEffect(() => {
        const results = copyMasterOrgNames().filter(orgs =>
            orgs.toLowerCase().includes(org.toLowerCase())
        );
        setAvailOrgs(results);
    }, [org])

    return (
        <div>
            <h2>I am a member of ...</h2>
            <div className="org-input-wrapper">
                <Input
                    label="Search an organization ..."
                    type="text"
                    list="physician-specialty"
                    value={org}
                    getInputVal={handleSearch}
                    placeholder="eg. Canadian Medical Association"
                />
            </div>
            <div>
                <Grid
                    container
                    alignContent='space-between'>
                    {renderAvailableOrgs(availOrgs, orgList, addSelectedOrg)}
                </Grid>
            </div>
            <div>
                {selectedOrgs.length > 0 &&
                    <h3>
                        Selected Organizations
                    </h3>
                }
                <Grid
                    container
                    alignContent='space-between'>

                    {
                        renderAvailableOrgs(selectedOrgs, orgList, removeSelectedOrg)
                    }
                </Grid>
            </div>

            <Button
                type="submit"
                handleClick={saveOrganizations}
                variant={selectedOrgs.length == 0 ? 'secondary' : 'primary'}
            >
                {selectedOrgs.length == 0 ? 'Skip for now' : 'Continue'}
            </Button>

            <datalist id="physician-specialty">
                <option>Canadian Medical Association</option>
                <option>Solutions for Kids in Pain</option>
                <option>Society of Rural Physicians of Canada</option>
            </datalist>
        </div>
    )
}

export default OrganizationForm;

OrganizationForm.defaultProps = {
    orgList: [],
    saveOrgs: () => null,
}

OrganizationForm.propTypes = {
    next: PropTypes.func,
    orgList: PropTypes.array,
    saveOrgs: PropTypes.func,
}