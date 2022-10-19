import React,{useState,useEffect} from 'react'
import { Header } from 'semantic-ui-react'
import PatientService from '../services/PatientService'
import OTable from '../utilities/OTable'

export default function PositivePatients() {

    const [patients, setPatients] = useState([])
    
    useEffect(() => {
        let patientService = new PatientService()
        patientService.getAllPostitivePatients().then(result => setPatients(result.data.data))
    }, [])
    

    return (
        <div>
            <Header as='h3' block >
                Hasta Listesi
            </Header>
            <OTable patients = {patients}/>
        </div>
    )
}
