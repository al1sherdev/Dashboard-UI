import React from 'react';
import { Col } from 'react-bootstrap';
import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { GoBell } from 'react-icons/go';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
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
