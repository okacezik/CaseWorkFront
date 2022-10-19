import React,{useState,useEffect} from 'react';
import { Header } from 'semantic-ui-react';
import PatientService from '../services/PatientService';
import OTableDetails from '../utilities/OTableDetails';

export default function PatientsDetails() {

  const [patients, setPatients] = useState([])
  useEffect(() => {
    let patientService = new PatientService();
    patientService.getAllPatientsDetails().then(result => setPatients(result.data.data))
  }, [])
  
  return (
    <div>
      <Header as='h3' block >
        Hasta Detaylar Listesi
      </Header>
      <OTableDetails patients = {patients}/>
    </div>
  )
}
