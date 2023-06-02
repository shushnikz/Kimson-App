import React from 'react'
import { Link } from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout'

const Signin = () => {
    return (
        <div>
            <h1>Sign in</h1>
            <Link to="/signup">Click here to sign up</Link>
        </div>
    )
}

export default Signin
