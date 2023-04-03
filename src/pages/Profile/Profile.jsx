import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Conversations from '../../components/Profile/Conversations';
import Platform from '../../components/Profile/Platform';
import ProfileInfo from '../../components/Profile/ProfileInfo';
import Projects from '../../components/Profile/Projects';

const Profile = () => {
  return (
    <div className='page'>
      <Row>
        <Col xl="12">
          <div className='component'>1234</div>
        </Col>
        <Col xl="4" lg="6" md="6" sm="12">
          <Platform />
        </Col>
        <Col xl="4" lg="6" md="6" sm="12">
          <ProfileInfo />
        </Col>
        <Col xl="4" lg="6" md="6" sm="12">
          <Conversations />
        </Col>
        <Col xl="12" lg="12" md="12" sm="12">
          <Projects />
        </Col>
      </Row>
    </div>
  )
}

export default Profile