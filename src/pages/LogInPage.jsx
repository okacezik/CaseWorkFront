import React,{useState,useEffect} from 'react'
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { FormField } from "semantic-ui-react";
import Button from 'react-bootstrap/Button';
import { Header } from 'semantic-ui-react'
import AdminService from '../services/AdminService';

export default function LogInPage(props) {

  const [admins,setAdmins] = useState([])

  useEffect(() => {
    let adminService = new AdminService();
    adminService.getAll().then(result => setAdmins(result.data.data))
  }, [])
  

  const initialValues =
  {
    username: "",
    password: ""
  }

  const schema = Yup.object({
    username: Yup.string().required("username field is required"),
    password: Yup.string().required("password field is required")
  })

  function entryControlHandle(values){
    //let adminService = new AdminService();
    //adminService.entryControl(values.username,values.password).then(result => setIsEntry(result.data.success))
    let result = entryControlAdmins(values);
    if(result === true){
      props.handleEntry();
      alert("Giriş Başarılı , Sisteme Hoşgeldin Admin...")
    }else{
      alert("Kullanıcı Bilgileri Hatalı")
      window.location.href="/"
    }
  }

  function entryControlAdmins(values){
    let result = false;
    admins.forEach(admin => {
      if(admin.username === values.username && admin.adminPassword === values.password){
        result = true;
      }
    });
    return result;
  }

  return (
    <div>
      <Header as='h3' block className='edit'>
        Giriş Paneli
      </Header>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => { entryControlHandle(values) }}
      >
        <Form className='ui form edit'>
          <FormField>
            <Field name="username" placeholder="Kullanıcı adı" />
          </FormField>
          <FormField>
            <Field type = "password" name="password" placeholder="Parola" />
          </FormField>
          <Button type = "submit" variant="primary">Giriş Yap</Button>
        </Form>
      </Formik>
    </div>
  )
}
