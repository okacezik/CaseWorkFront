import axios from "axios";

export default class PatientService{

    addPatient(patient){
        return axios.post("https://localhost:44311/api/Patients/add",patient);
    }

    getAllPatients(){
        return axios.get("https://localhost:44311/api/Patients/getAll");
    }

    deletePatient(identityNumber){
        return axios.delete("https://localhost:44311/api/Patients/delete?identityNumber="+identityNumber)
    }

    getAllPatientsDetails(){
        return axios.get("https://localhost:44311/api/Patients/getAllPatientsDetails")
    }

    getAllPostitivePatients(){
        return axios.get("https://localhost:44311/api/Patients/getAllPositivePatients")
    }
}