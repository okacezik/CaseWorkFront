import React from 'react'
import { FormField } from "semantic-ui-react";
import { Field, Form, Formik } from 'formik';
import { Header } from 'semantic-ui-react'
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';
import PatientService from '../services/PatientService';

export default function DeletePatient() {

    const initialValues = { identityNumber: "" }

    const schema = Yup.object({
        identityNumber: Yup.string().required("identity number is required...")
    })

    function deletePatientHandle({identityNumber}){  //objeyi destructering ettik
        console.log(identityNumber)
        let patientService = new PatientService()
        patientService.deletePatient(identityNumber)
        alert("Hasta silme işlemi başarılı..")
        window.location.href = "/";
    }

    return (
        <div>
            <Header as='h3' block className='edit'>
                Hasta Sil
            </Header>
            <Formik
                initialValues = {initialValues}
                validationSchema = {schema}
                onSubmit = {(values)=>{deletePatientHandle(values)}}>
                <Form className='ui form edit'>
                    <FormField><Field name = "identityNumber" placeholder = "Kimlik numarası"/></FormField>
                    <Button variant="success" type = "submit">Hastayı Sil</Button>
                </Form>
            </Formik>
        </div>
    )
}
