import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DataTable from '../../components/TablesCompo/MainTable';
import MainTable from '../../components/TablesCompo/MainTable';
import Footer from '../Footer/Footer';
import './Table.scss';

const Tables = () => {
  return (
    <div className='page' id='table'>
        <Row>
          <Col xl="12">
            <DataTable />
          </Col>
          <Col xl="12">
            <Footer />
          </Col>
        </Row>
    </div>
  )
}

export default Tables
