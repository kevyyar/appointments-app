import { useContext } from 'react';
import { PatientsContext } from '../../context/PatientProvider.context';
import './Patient.styles.scss';
import { Button } from "../../commons/Buttons/Button";

export const Patient = ({ patient }) => {

    const { petName, petOwner, ownerEmail, petDischargeDate, petSymptoms } = patient;

    const { onEditPatient } = useContext(PatientsContext);

    return (
        <div className="patient">
            <p>Name: <span className="patient-details">{petName}</span></p>
            <p>Owner: <span className="patient-details">{petOwner}</span></p>
            <p>Email: <span className="patient-details">{ownerEmail}</span></p>
            <p>Discharge Date: <span className="patient-details">{petDischargeDate}</span></p>
            <p>Symptoms: <span className="patient-details">{petSymptoms}</span></p>
            <div className="btn-actions">
                <Button style={{ marginRight: '1.2rem' }} onClick={() => onEditPatient(patient)}>Edit</Button>
                <Button style={{ marginRight: '0', backgroundColor: '#f83427' }}>Remove</Button>
            </div>
        </div>
    )
}