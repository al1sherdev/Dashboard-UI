import axios from 'axios'
import React from 'react'
import { useRef } from 'react'

const Register = () => {
    const emailInput = useRef(null)
    const passInput = useRef(null)

    const Auth = (e) => {
        e.preventDefault()
        const user = {
            email: "eve.holt@reqres.in",
            password: "cityslicka"
        }
        axios.post('https://reqres.in/api/login', user)
                .then(res => {
                    console.log(res)
                })
                .catch(err => console.log(err))
    }

  return (
    <div>
        <form onSubmit={Auth} className='form-control'>
            <input className='form-control' type="text" ref={emailInput} />
            <input className='form-control' type="text" ref={passInput} />
            <button className='btn btn-succes'></button>
        </form>
    </div>
  )
}

export default Register