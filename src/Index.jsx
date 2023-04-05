import React, { useState } from 'react';
import App from './App';
import Login from './pages/Auth/Login';

const Index = () => {
  const [token, setToken] = useState(window.localStorage.getItem('token'))

  if(!token) {
    return <Login setToken={setToken} />
  } else {
    return <App />
  }

}

export default Index