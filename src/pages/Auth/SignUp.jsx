import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ScrollReveal from 'scrollreveal';

// images
import apple from '../../assets/images/logo-apple.svg';
import facebook from '../../assets/images/logo-facebook.svg';
import google from '../../assets/images/logo-google.svg';

import SwitchControlled from '../../components/Profile/Switch';
import AuthFooter from './AuthFooter';
import { RegisterSec, SignUpBacImg, SignUpSec } from './styled';


const SignUp = ({ setToken }) => {
    const nameInput = useRef(null)
    const emailInput = useRef(null)
    const passInput = useRef(null)

    useEffect(() => {
      window.scroll(0, 0)
      window.scroll(0, 0)
        const sr = ScrollReveal({
            origin: "top",
            distance: "100px",
            duration: 2000,
            reset: false,
            });
            sr.reveal(
            `
            .component,
            .anime
            `,
            {
                opacity: 0,
                interval: 100,
            }
            );
  }, [])

    function Auth(e) {
      e.preventDefault()

      const user = {
          email: "eve.holt@reqres.in",
          password: "pistol"
      }
      axios.post('https://reqres.in/api/register', user)
              .then(({data}) => {
                  setToken(data.token)
                  window.localStorage.setItem('token', data.token)
              })
              .catch(err => console.log(err))
  }

  return (
    <RegisterSec>
      <SignUpBacImg />
      <Container>
        <div className="component top__nav">
            <h4>Soft UI Dashboard</h4>
            <button className='btn btn-info'>Free download</button>
        </div>
          <SignUpSec className='anime'>
            <h1>Welcome!</h1>
            <p>Use these awesome forms to login or create new account in your project for free.</p>
            <div className="card">
              <div className="title">Register with</div>
              <div className='with'>
                <div>
                  <img src={facebook} alt="apple" />
                </div>
                <div>
                  <img src={apple} alt="apple" />
                </div>
                <div>
                  <img src={google} alt="google" />
                </div>
              </div>
              <div className='more'>
                <span></span>
                  or
                <span></span>
              </div>
              <form onSubmit={Auth}>
                  <label>Name</label>
                  <input className='form-control' type="text" ref={nameInput} placeholder='Name' />
                  <label>Email</label>
                  <input className='form-control' type="email" ref={emailInput} placeholder="Email" />
                  <label>Password</label>
                  <input className='form-control' type="password" ref={passInput} placeholder="Password" />
                  <div className='d-flex align-items-center my-4'>
                      <SwitchControlled className="switch" /> <span className='ms-2 remember'>I agree the Terms and Conditions</span> <br />
                  </div>
                  <button className='btn btn-info w-100'>Sign Up</button>
                  <p>Already have an account?
                    <span>
                      <Link to='/'>
                          Sign in
                      </Link>
                    </span>
                  </p>
              </form>
            </div>
          </SignUpSec>
      </Container>
      <AuthFooter />
    </RegisterSec>
  )
}

export default SignUp