import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ProfessionSelectButton from '../../Buttons/ProfessionSelectButton/ProfessionSelectButton';

import './CheckForm.scss';
import Input from '../../Input/Input';
import sampleOrgImg from '../../../assets/img/cma-logo.svg';
import OrganizationWrapper from '../OrganizationForm/OrganizationWrapper/OrganizationWrapper';

function CheckForm() {

    const [sampleValues, setSampleValues] = useState({
        specialty: 'Rocket Surgeon',
        firstname: 'Eivan',
        lastname: 'Nisperos',
        city: 'Halifax',
        province: 'NS',
        country: 'Canada'
    })

    function setSpecialty(event) {
        setSampleValues({
            ...sampleValues,
            specialty: event.target.value
        })
    }

    return (
        <div>
            <div>
                <h1>Is this correct?</h1>
                <p>Make sure the information you've inputted is accurate. You need to be verified by our team to complete the registration, which should take less than 24 hours.</p>
            </div>
            <div>
                <label>Email Address:</label>
                <p className="text-disabled">eivannisp@hotmail.com</p>
            </div>
            <div>
                <div className="profession-select-edit">
                    <label>I am a:</label>
                    <a href="#">Edit</a>
                </div>
                <ProfessionSelectButton
                    professionName='physician'
                >
                    I'm a trained and liscenced to practice medicine.
                </ProfessionSelectButton>
            </div>
            <div>
                <Input
                    name="specialty"
                    label="Specializing in :"
                    type="text"
                    value={sampleValues.specialty}
                    getInputVal={setSpecialty}
                    placeholder="eg. General Practice"
                    variant="thin"
                />
            </div>
            <div>
                <div className="profession-select-edit">
                    <label>I am a part of:</label>
                    <a href="#">Edit</a>
                </div>
                <OrganizationWrapper
                    img={sampleOrgImg}
                    orgName="Canadian Medical Assocation"
                />
            </div>
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Input
                            name="firstname"
                            label="First Name:"
                            type="text"
                            value={sampleValues.firstname}
                            getInputVal={setSpecialty}
                            variant="thin"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            name="specialty"
                            label="Last Name:"
                            type="text"
                            value={sampleValues.lastname}
                            getInputVal={setSpecialty}
                            variant="thin"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Input
                            name="city"
                            label="City:"
                            type="text"
                            value={sampleValues.city}
                            getInputVal={setSpecialty}
                            variant="thin"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            name="province"
                            label="Province:"
                            type="text"
                            value={sampleValues.province}
                            getInputVal={setSpecialty}
                            variant="thin"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            name="country"
                            label="Country:"
                            type="text"
                            value={sampleValues.country}
                            getInputVal={setSpecialty}
                            variant="thin"
                        />
                    </Grid>
                </Grid>
            </div>
            <div>
                <p className="fineprint">
                    By clicking FINISH, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy.</a>
                </p>
            </div>
        </div>
    )
}

export default CheckForm;