import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';


const Login = ({ setToken }) => {
    
  return (
        <Routes>
            <Route path='/' element={ <SignIn  setToken={setToken} /> }/>
            <Route path='/signup' element={ <SignUp setToken={setToken} /> } />
        </Routes>
  )
}

export default Login