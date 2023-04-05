import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';


const Login = ({ setToken }) => {
    
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <SignIn  setToken={setToken} /> }/>
            <Route path='/signup' element={ <SignUp setToken={setToken} /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default Login