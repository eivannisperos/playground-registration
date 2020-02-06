import React from 'react';
import PropTypes from 'prop-types';

import physicianImage from '../../assets/img/select-physician.png';
import medStudentImage from '../../assets/img/select-med-student.png';
import hcpOtherImage from '../../assets/img/select-hcp-other';
import SelectButton from '../SelectButtons/SelectButton';

function ProfessionSelection({ step }) {
    if (step !== 1) {
        return null
    } else {
        return (
            <div>
                <div className="form-title">
                    <h2>What do you do?</h2>
                    <h4>Select one of the following:</h4>
                </div>
                <div>
                    <SelectButton
                        buttonImg={physicianImage}
                        imgDescription="A cartoon image of a female physician."
                        buttonName="Physician"
                        buttonDescription="You're trained and licenced to practice medicine."
                        onClick={onClick}
                    />
                    <SelectButton
                        buttonImg={medStudentImage}
                        imgDescription="A cartoon male with glasses and a backpack."
                        buttonName="Medical Student"
                        buttonDescription="Currently attending an accredited medical school."
                        onClick={onClick}
                    />
                    <SelectButton
                        buttonImg={hcpOtherImage}
                        imgDescription="A cartoon male with a red tie and a gray suit."
                        buttonName="Health Care Provider"
                        buttonDescription="Specialists in the medical field."
                        onClick={onClick}
                    />
                    <SelectButton
                        buttonImg={hcpOtherImage}
                        imgDescription="A cartoon male with glasses and a backpack."
                        buttonName="Other"
                        buttonDescription="Any other specialists in medicine."
                        onClick={onClick}
                    />
                </div>
            </div>
        )
    }
}

export default ProfessionSelection;

ProfessionSelection.propTypes = {
    step: PropTypes.number.isRequired,
}