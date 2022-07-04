import { useContext, useEffect } from 'react';

import './Form.styles.scss';
import { TextInput } from "../../commons/Inputs/TextInput";
import { TextArea } from "../../commons/Inputs/TextArea";
import { Button } from "../../commons/Buttons/Button";
import { ErrorMessage } from "../../commons/ErrorMessage/ErrorMessage";
import { PatientsContext } from '../../context/PatientProvider.context';
import { schema } from './models/schema';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


export const Form = () => {
    const { addPatient, editPatient } = useContext(PatientsContext);


    useEffect(() => {
        console.log(editPatient)
    }, [])

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = data => {
        addPatient(data);
        reset();
    }

    // set styles object for error message
    const styledError = {
        border: '1px solid #f83427',
        borderRadius: '8px',
    }

    return (
        <div className="form-container">
            <h2>Patient Follow-Up</h2>
            <p>Add & Manage <span className="subheading">Patients</span></p>
            <form className="patient-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextInput name="Pet Name" label="petName" placeholder="Enter pet name" style={errors.petName ? styledError : null} register={register}
                        required />
                    {errors.petName && <ErrorMessage error={errors.petName.message} />}
                </div>
                <div>
                    <TextInput name="Pet Owner" label="petOwner" placeholder="Enter owner name" style={errors.petOwner ? styledError : null} register={register}
                        required />
                    {errors.petOwner && <ErrorMessage error={errors.petOwner.message} />}
                </div>
                <div>
                    <TextInput name="Email" label="ownerEmail" type="email" placeholder="Enter email" style={errors.ownerEmail ? styledError : null}
                        register={register} required />
                    {errors.ownerEmail && <ErrorMessage error={errors.ownerEmail.message} />}
                </div>
                <div>
                    <TextInput name="Discharge Date" label="petDischargeDate" type="date" style={errors.petDischargeDate ? styledError : null} register={register} required />
                    {errors.petDischargeDate && <ErrorMessage error={errors.petDischargeDate.message} />}
                </div>
                <div>
                    <TextArea name="Patient Symptoms" label="petSymptoms" placeholder="Enter pet symptoms" style={errors.petSymptoms ? styledError : null}
                        register={register} required />
                    {errors.petSymptoms && <ErrorMessage error={errors.petSymptoms.message} />}
                </div>
                <Button>Save</Button>
            </form>
        </div>
    )
}