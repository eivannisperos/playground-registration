import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './PhysicianForm.scss';
import BackButton from '../../Buttons/BackButton/BackButton';
import SpecialtyForm from '../SpecialtyForm/SpecialtyForm';
import OrganizationForm from '../OrganizationForm/OrganizationForm';

//assets
import cmaLogo from '../../../assets/img/cma-logo.svg';
import skipLogo from '../../../assets/img/skip-logo.svg';
import srpcLogo from '../../../assets/img/srpc-logo.svg';
import InfoForm from '../InfoForm/InfoForm';
import CheckForm from '../CheckForm/CheckForm';

//TODO
// forms should reflect saved data stored here

function PhysicianForm({ getData, prevStep, saveData }) {
    const [currentStep, setCurrentStep] = useState(3);

    useEffect(() => {
        console.log(physicianData)
    })

    const [physicianData, setPhysicianData] = useState({
        specialty: '',
        organizations: [],
        firstname: '',
        lastname: '',
        country: '',
        province: '',
        city: '',
        password: '',
    });

    //TODO Set specialty will need to be moved here, since data needs to be available at this level
    //const [physicianData, setPhysicianData] = useState({});
    const [specialty, setSpecialty] = useState('');
    const [organizations, setOrganizations] = useState([]);
    const [information, setInformation] = useState({});

    function next() {
        return currentStep >= 3 ? 3 : setCurrentStep(currentStep + 1);
    }

    function prev(event) {
        return currentStep <= 0 ? prevStep(event) : setCurrentStep(currentStep - 1);
    }

    function saveSpecialty(event) {
        setPhysicianData({
            ...physicianData,
            specialty: event
        })
    }

    function saveOrgs(event) {
        setPhysicianData({
            ...physicianData,
            organizations: event
        })
    }

    function saveInfo(event) {
        setPhysicianData({
            ...physicianData, 
           firstname: event.firstname,
           lastname: event.lastname,
           country: event.country,
           province: event.province,
           city: event.city,
           password: event.password,
        })
    }

    function determineFormDisplay(step) {
        switch (step) {
            case 0:
                return <SpecialtyForm
                    next={next}
                    getData={physicianData.specialty}
                    saveData={saveSpecialty}
                />
            case 1:
                return <OrganizationForm
                    orgList={sampleOrgs}
                    saveOrgs={saveOrgs}
                    getOrgs={physicianData.organizations}
                    next={next}
                />
            case 2:
                return <InfoForm
                    getInfo={physicianData}
                    saveInfo={saveInfo}
                    next={next}
                />
            case 3:
                return <CheckForm />
        }
    }

    return (
        <div className="psb-container">
            <BackButton
                handleClick={prev}
                destination='profession-select'
            />
            {determineFormDisplay(currentStep)}
        </div>
    )
}

export default PhysicianForm;

PhysicianForm.defaultProps = {
    nextStep: () => null,
    prevStep: () => null,
    saveData: () => null,
}

PhysicianForm.propTypes = {
    nextStep: PropTypes.func,
    prevStep: PropTypes.func,
    saveData: PropTypes.func,
}

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