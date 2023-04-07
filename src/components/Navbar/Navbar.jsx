import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { GoBell } from 'react-icons/go';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import './Navbar.scss';

const Navbar = ({ setDarkMode, darkMode }) => {

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
        <div className='dashboardui'>Dashboard UI</div>
      </Col> 
      <Col className='setting__icons d-flex justify-content-end align-items-center'>
        <button 
          onClick={() => setDarkMode(!darkMode)}
        >
          <MdDarkMode />
          <MdLightMode />
        </button>
        <input 
          type="search" 
          className='form-control fs-6'
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

