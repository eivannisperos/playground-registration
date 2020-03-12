import React from 'react';
import PropTypes from 'prop-types';
import './OrganizationWrapper.scss';

function OrganizationWrapper({ img, orgName }) {
    return (
        <div className='org-btn'>
            <img src={img} alt="Organization" />
            <p>{orgName}</p>
        </div>
    )
}

export default OrganizationWrapper;

OrganizationWrapper.defaultProps = {
    orgName: 'Organization name',
}

OrganizationWrapper.propTypes = {
    img: PropTypes.string.isRequired,
    orgName: PropTypes.string,
}
