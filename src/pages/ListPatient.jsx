import React, { useState, useEffect } from 'react'
import PatientService from '../services/PatientService'
import Table from 'react-bootstrap/Table';
import { Header } from 'semantic-ui-react'

export default function ListPatient() {

    const [patients, setPatients] = useState([])

    useEffect(() => {
        let patientService = new PatientService()
        patientService.getAllPatients().then(result => setPatients(result.data.data))
    }, [])


    function isSickControl(result) {
        console.log(result)
        if (result == true) {
            return "Pozitif";
        } else {
            return "Negatif";
        }
    }

    return (
        <div>
            <Header as='h3' block >
                Hasta Listesi
            </Header>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Kimlik Numarası</th>
                        <th>Ad</th>
                        <th>Soyad</th>
                        <th>Test Sonucu</th>
                        <th>Hasta Kayıt Tarihi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map((patient) => (
                            <tr>
                                <td>{patient.patientId}</td>
                                <td>{patient.identityNumber}</td>
                                <td>{patient.firstName}</td>
                                <td>{patient.lastName}</td>
                                <td>{isSickControl(patient.isSick)}</td>
                                <td>{patient.caseDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table></div>
    )
}
