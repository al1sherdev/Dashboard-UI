import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
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
}, [])
  return (
    <div className='page' id='dashboard'> 
    <Row>
      <Col xl="12" lg="12" md="12" sm="12">
        <GrowthCard />
      </Col>
      <Col xl="7" lg="6" md="6" sm="12">
        <Actions />
      </Col>
      <Col xl="5" lg="6" md="6" sm="12">
        <Work />
      </Col>
      <Col xl="4">
        <Orders />
      </Col>
      <Col xl="8">
        <Projects />
      </Col>
      <Col xl="12">
        <Footer />
      </Col>
    </Row>
    </div>
  )
}

export default Dashboard