import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';

// components
import Actions from '../../components/DashboardCompo/Actions';
import GrowthCard from '../../components/DashboardCompo/GrowthCard';
import Orders from '../../components/DashboardCompo/Orders';
import Projects from '../../components/DashboardCompo/Projects';
import Work from '../../components/DashboardCompo/Work';
import Footer from '../Footer/Footer';
import './Dashboard.scss';

const Dashboard = () => {
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
    <div className='page' id='dashboard'> 
    <Row>
      <Col className='anime' xl="12" lg="12" md="12" sm="12">
        <GrowthCard />
      </Col>
      <Col className='anime' xl="7" lg="6" md="6" sm="12">
        <Actions />
      </Col>
      <Col className='anime' xl="5" lg="6" md="6" sm="12">
        <Work />
      </Col>
      <Col className='anime' xl="4">
        <Orders />
      </Col>
      <Col className='anime' xl="8">
        <Projects />
      </Col>
      <Col className='anime' xl="12">
        <Footer />
      </Col>
    </Row>
    </div>
  )
}

export default Dashboard