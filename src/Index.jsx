import React, { useState } from 'react'
import App from './App'
import Register from './pages/Auth/Register'

const Index = () => {
  const [token, setToken] = useState(window.localStorage.getItem('token'))


  if(!token) {
    return <Register setToken={setToken} />
  } else {
    return <App />
  }

}

export default Index