import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddPatient from '../pages/AddPatient';
import ListPatient from '../pages/ListPatient';
import { Route, Routes } from 'react-router-dom';
import Operations from './Operations';
import DeletePatient from '../pages/DeletePatient';

export default function Dashboard() {
    return (
        <div className='mt-5'>
            <Row>
                <Col xs = {4}>
                    <Operations/>
                </Col>
                <Col xs={6}>
                    <Routes>
                        <Route exact path = '/' element={<ListPatient />} />
                        <Route exact path = '/add' element={<AddPatient />} />
                        <Route exact path = '/delete' element={<DeletePatient/>} />
                    </Routes>
                </Col>
            </Row>
        </div>
    )
}
