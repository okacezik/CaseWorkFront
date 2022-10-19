import React from 'react';
import { Field, Form, Formik } from 'formik';
import { FormField } from "semantic-ui-react";
import { Header } from 'semantic-ui-react';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import PatientService from '../services/PatientService';

export default function AddPatient() {

    const initialValues = {
        identityNumber: "",
        firstName: "",
        lastName: "",
        isSick: true,
        hospitalizedCurrently: true,
        inIcuCurrently: true,
        pending:true 
    }

    const schema = Yup.object({
        identityNumber: Yup.string().required().length(11),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        isSick: Yup.bool().required(),
        hospitalizedCurrently: Yup.bool().required(),
        inIcuCurrently: Yup.bool().required(),
        pending: Yup.bool().required()
    })

    function addPatientHandle(patient){
        patient.caseDate = new Date();
        console.log(patient);
        let patientService = new PatientService();
        patientService.addPatient(patient);
        alert("hasta ekleme işlemi başarılı...")
        window.location.href = "/";
    }

    return (
        <div>
            <Header as='h3' block className='edit'>
                Hasta Kabul
            </Header>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit = {(values) => {addPatientHandle(values)}}
            >
                <Form className='ui form edit'>
                    <FormField><Field name="identityNumber" placeholder="Kimlik numarası" /></FormField>
                    <FormField><Field name="firstName" placeholder="Ad" /></FormField>
                    <FormField><Field name="lastName" placeholder="Soyad" /></FormField>
                    <FormField><Field name="isSick" placeholder="Pozitif mi ? " /></FormField>
                    <FormField><Field name="hospitalizedCurrently" placeholder="Hastaneye mi kaldırıldı ?" /></FormField>
                    <FormField><Field name="inIcuCurrently" placeholder="Yoğun bakımda mı  ?" /></FormField>
                    <FormField><Field name="pending" placeholder="Beklemede mi ? " /></FormField>
                    <Button variant="success" type = "submit">Kaydet</Button>
                </Form>
            </Formik>
        </div>
    )
}
