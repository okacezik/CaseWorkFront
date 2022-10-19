import axios from 'axios';

export default class AdminService{
    
    entryControl(username,password){
        return axios.get("https://localhost:44311/api/Admins/entryControl?username="+username+"&password="+password)
    }

    getAll(){
        return axios.get("https://localhost:44311/api/Admins/getAll")
    }
}