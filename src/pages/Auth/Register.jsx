import axios from 'axios';
import React,{ useRef } from 'react';
import SwitchControlled from '../../components/Profile/Switch';
import { Container } from 'react-bootstrap';
import { RegisterSec } from './styled';
import './style.scss';


const Register = ({ setToken }) => {
    const emailInput = useRef(null)
    const passInput = useRef(null)

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
    <Container>
        <div className="background_img">
            <div className='intro'>
                <h2>Welcome Back</h2>
                <p>Enter your email and password to sign in</p>
            </div>
            <form onSubmit={Auth} className='form-control w-25'>
                <label>Email</label>
                <input className='form-control' type="text" ref={emailInput} />
                <label>Password</label>
                <input className='form-control' type="text" ref={passInput} />
                <SwitchControlled /> <br />
                <button className='btn btn-info'>Login</button>
            </form>
        </div>
    </Container>
   </RegisterSec>
  )
}

export default Register