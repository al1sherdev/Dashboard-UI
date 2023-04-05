import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SwitchControlled from '../../components/Profile/Switch'
import AuthFooter from './AuthFooter';
import { FormSec, RegisterSec } from './styled';




const SignIn = ({ setToken }) => {
    const emailInput = useRef(null)
    const passInput = useRef(null)

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    function Auth(e) {
        e.preventDefault()

        const user = {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        }
        axios.post('https://reqres.in/api/login', user)
                .then(({data}) => {
                    setToken(data.token)
                    window.localStorage.setItem('token', data.token)
                })
                .catch(err => console.log(err))
    }
    
  return (
        <RegisterSec>
                <div className="background_img"></div>
                <Container>
                    <div className="component top__nav">
                        <h4>Soft UI Dashboard</h4>
                        <button className='btn btn-info'>Free download</button>
                    </div>
                    <FormSec>
                        <div className='intro'>
                            <h2>Welcome Back</h2>
                            <p>Enter your email and password to sign in</p>
                        </div>
                        <form onSubmit={Auth} className=' w-50'>
                            <label>Email</label>
                            <input className='form-control' type="email" ref={emailInput} placeholder="Email" />
                            <label>Password</label>
                            <input className='form-control' type="password" ref={passInput} placeholder="Password" />
                            <div className='d-flex align-items-center my-4'>
                                <SwitchControlled className="switch" /> <span className='ms-2 remember'>Remember me</span> <br />
                            </div>
                            <button className='btn btn-info'>Sign In</button>
                            <p>Don't have an account?
                            <span>
                                    <Link to="/signup">
                                        Sign Up
                                    </Link>
                            </span>
                            </p>
                        </form>
                    </FormSec>
                </Container>
            <AuthFooter />
        </RegisterSec>
  )
}

export default SignIn