import { useContext } from 'react'
import { PatientsContext } from '../../context/PatientProvider.context';

import './PatientsList.scss';
import { Patient } from "../Patient/Patient";

export const PatientsList = () => {
    const { patients } = useContext(PatientsContext)

    return (
        <div className="patients-list-container">
            {!patients.length ? (
                <>
                    <h2>No Patients Found</h2>
                    <p>Start by adding <span className="subheading">patients</span></p>
                </>
            ) : (
                <>
                    <h2>Patient List</h2>
                    <p>Manage Your <span className="subheading">Patients & Appointments</span></p>
                    {patients.length && patients.map(patient => <Patient key={patient.id} patient={patient} />)}
                </>

            )}
        </div>
    )
}