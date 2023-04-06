import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { GoBell } from 'react-icons/go';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import './Navbar.scss';

const Navbar = () => {

  useEffect(() => {
    const sr = ScrollReveal({
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        .navbar,
        .icon,
        .setting__icons
      `,
        {
          opacity: 0,
          interval: 100,
        }
      );
}, [])

  return (
    <div className='navbar'>
      <Col>
        <div className="icon text-muted">
          <AiFillHome /> / Dashboard
          <strong className='d-block my-1'>Dashboard</strong>
        </div>
      </Col> 
      <Col className='setting__icons d-flex justify-content-end align-items-center'>
        <input 
          type="search" 
          className='form-control fs-6 w-50 py-2'
          placeholder='Type here'
        />
        <Link to="/profile">
          <CgProfile  />
        </Link>
        <Link to="/">
          <AiFillSetting />
        </Link>
        <Link to="/">
          <GoBell />
        </Link>
      </Col>
    </div>
  )
}

export default Navbar

