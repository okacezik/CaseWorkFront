import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddPatient from '../pages/AddPatient';
import ListPatient from '../pages/ListPatient';
import { Route, Routes } from 'react-router-dom';
import Operations from './Operations';
import DeletePatient from '../pages/DeletePatient';
import LogInPage from '../pages/LogInPage';

export default function Dashboard() {
    const [isEntry, setIsEntry] = useState(false)

    function handleEntry() {
        setIsEntry(true);
    }

    return (
        <div className='mt-5'>
            {
                isEntry === true ?
                    <Row>
                        <Col xs={4}>
                            <Operations />
                        </Col>
                        <Col xs={6}>
                            <Routes>
                                <Route exact path='/' element={<ListPatient />} />
                                <Route exact path='/add' element={<AddPatient />} />
                                <Route exact path='/delete' element={<DeletePatient />} />
                            </Routes>
                        </Col>
                    </Row>
                    :
                    <div className='editLog'>
                        <LogInPage handleEntry={handleEntry} />
                    </div>
            }

        </div>
    )
}
