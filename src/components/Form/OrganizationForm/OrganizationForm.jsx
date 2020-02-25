import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '../../Input/Input';
import Button from '../../Buttons/Button/Button';
import './OrganizationForm.scss';

//assets
import cmaLogo from '../../../assets/img/cma-logo.svg';
import skipLogo from '../../../assets/img/skip-logo.svg';
import srpcLogo from '../../../assets/img/srpc-logo.svg';

function OrganizationForm() {
    const [org, setOrg] = useState('');
    const [selectedOrgs, setSelectedOrgs] = useState([]);
    const [availOrgs, setAvailOrgs] = useState(copyMasterOrgNames);
    //need array of two things
    //1. available organizations
    // - if its already selected, it should not appear here
    //2. selected organizations
    // - if it is selected, should not be in available organizations

    function copyMasterOrgNames() {
        const copyMasterOrgNames = [];
        for (var i = 0; i < sampleOrgs.length; i++) {
            copyMasterOrgNames.push(sampleOrgs[i].orgName);
        }
        return copyMasterOrgNames;
    }

    function addSelectedOrg(event) {
        event.preventDefault();
        console.log(event.currentTarget.value);
        setSelectedOrgs([...selectedOrgs, event.currentTarget.value]);
    }

    // render 

    function renderAvailableOrgs() {
        return (
            availOrgs.map(ao => (
                sampleOrgs.map((so, index) => {
                    if (so.orgName == ao) {
                        return (
                            <Grid
                                item xs={4}
                                key={index}>
                                <button
                                    onClick={addSelectedOrg}
                                    className="org-btn"
                                    value={so.orgName}>
                                    <img src={so.img} alt="Organization" />
                                    <p>{so.orgName}</p>
                                </button>
                            </Grid>
                        )
                    }
                }
                )
            ))
        )
    }

    function renderSelectedOrgs() {
        return (
            <Grid
                container
                alignContent='space-between'>
                {
                    availOrgs.map((so, index) => (
                        <div>
                            <Grid
                                item xs={4}
                                key={index}>
                                <button
                                    onClick={addOrg}
                                    className='org-btn'
                                    value={so.orgName}>
                                    <img src={so.img} alt="organization img" />
                                    <p>{so.orgName}</p>
                                </button>
                            </Grid>
                        </div>

                    ))
                }
            </Grid>
        )
    }
    // function renderAvailableOrgs() {
    //     return (
    //         <Grid
    //             container
    //             alignContent='space-between'>
    //             {
    //                 availOrgs.map(ao => {
    //                     selectedOrgs.map(so => {git add
    //                         if (so.orgName == ao.orgName) {
    //                             console.log(`${ao.orgName}`)
    //                             return (
    //                                 <Grid
    //                                     item xs={4}
    //                                     key={orgList.key}
    //                                 >
    //                                     <button
    //                                         className="org-btn"
    //                                         value={ao.orgName}
    //                                     >
    //                                         <img src={ao.img} alt="The logo for CMA" />
    //                                         <p>
    //                                             {ao.orgName}
    //                                         </p>
    //                                     </button>
    //                                 </Grid>
    //                             )
    //                         }
    //                     })
    //                 })
    //             }
    //         </Grid>
    //     )
    // }


    function getOrganiztion(event) {
        setOrg(event.target.value);
    }

    //if the current button is organization is already selected,
    //dont show it on avail orgs
    // function addItem(event) {
    //     event.preventDefault();
    //     console.log(`Add to Selected: ${event.currentTarget.value}`)
    //     const availableOrgs = availOrgs;
    //     availableOrgs.filter(orgs => orgs.orgName =! event.currentTarget.value);
    //     getAvailOrgs(availableOrgs);
    //     // availOrgs.map(orgList => {
    //     //     if (event.currentTarget.value == orgList.orgName) {
    //     //         console.log('test')
    //     //         addSelectedOrgs([...selectedOrgs, {
    //     //             orgName: event.currentTarget.value,
    //     //         }])
    //     //     } else {

    //     //     }
    //     // })
    //     console.log('New Available Orgs:');
    //     console.log(availableOrgs);
    // }

    // function renderAvailableOrgs(orgs) {
    //     return (
    //         <Grid
    //             container
    //             alignContent='space-between'>
    //             {
    //                 orgs.map((orgList, index) => (
    //                     <Grid
    //                         item xs={4}
    //                         key={orgList.key}
    //                     >
    //                         <button
    //                             onClick={addItem}
    //                             className="org-btn"
    //                             value={orgList.orgName}
    //                         >
    //                             <img src={orgList.img} alt="The logo for CMA" />
    //                             <p>
    //                                 {orgList.orgName}
    //                             </p>
    //                         </button>
    //                     </Grid>
    //                 )
    //                 )
    //             }
    //         </Grid>

    //     )
    // }

    // function renderSelectedOrgs(orgs) {
    //     return (
    //         <Grid
    //             container
    //             alignContent='space-between'>
    //             <h3>Selected Organizations</h3>
    //             {
    //                 orgs.map((orgList, index) => (
    //                     <Grid
    //                         item xs={4}
    //                         key={index}
    //                     >
    //                         <button
    //                             onClick={addItem}
    //                             className="org-btn"
    //                             value={orgList.orgName}
    //                         >
    //                             <img src={orgList.img} alt="The logo for CMA" />
    //                             <p>
    //                                 {orgList.orgName}
    //                             </p>
    //                         </button>
    //                     </Grid>)
    //                 )
    //             }
    //         </Grid>
    //     )
    // }

    useEffect(() => {
        console.log(selectedOrgs)
    })

    return (
        <div>
            <h2>I am a member of ...</h2>
            <div className="org-input-wrapper">
                <Input
                    label="Search an organization ..."
                    type="text"
                    list="physician-specialty"
                    value={org}
                    getInputVal={getOrganiztion}
                    placeholder="eg. Canadian Medical Association"
                />
            </div>
            <Grid
                container
                alignContent='space-between'>
                {renderAvailableOrgs()}
            </Grid>
            <Button
                type="submit"
                variant={org == '' ? 'secondary' : 'primary'}
            >
                {org == '' ? 'Skip for now' : 'Continue'}
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

const sampleOrgs = [
    {
        key: 1,
        orgName: 'Canadian Medical Association',
        img: cmaLogo,
    },
    {
        key: 2,
        orgName: 'Solutions for Kids in Pain',
        img: skipLogo,
    },
    {
        key: 3,
        orgName: 'Society of Rural Physicians of Canada',
        img: srpcLogo,
    }
]