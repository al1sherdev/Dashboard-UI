import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';

// components
import Conversations from '../../components/Profile/Conversations';
import Platform from '../../components/Profile/Platform';
import ProfileInfo from '../../components/Profile/ProfileInfo';
import ProfileNav from '../../components/Profile/ProfileNav';
import Projects from '../../components/Profile/Projects';
import Footer from '../Footer/Footer';

const Profile = () => {
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
    <div className='page'>
      <Row>
        <Col className='anime' xl="12" lg="12" md="12" sm="12">
          <ProfileNav />
        </Col>
        <Col className='anime' xl="4" lg="6" md="6" sm="12">
          <Platform />
        </Col>
        <Col className='anime' xl="4" lg="6" md="6" sm="12">
          <ProfileInfo />
        </Col>
        <Col className='anime' xl="4" lg="6" md="6" sm="12">
          <Conversations />
        </Col>
        <Col className='anime' xl="12" lg="12" md="12" sm="12">
          <Projects />
        </Col>
        <Col className='anime' xl="12" lg="12" md="12" sm="12">
            <Footer />
        </Col>
      </Row>
    </div>
  )
}

export default Profile