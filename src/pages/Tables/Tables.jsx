import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';

// components
import DataTable from '../../components/TablesCompo/MainTable';
import Footer from '../Footer/Footer';

import './Table.scss';

const Tables = () => {
  useEffect(() => {
    window.scroll(0, 0)
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
      .anime
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
}, [])
  return (
    <div className='page' id='table'>
        <Row>
          <Col className='anime' xl="12">
            <DataTable />
          </Col>
          <Col className='anime' xl="12">
            <Footer />
          </Col>
        </Row>
    </div>
  )
}

export default Tables
