import React from 'react'
import { Link } from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout'

const Signup = () => {
    return (
        <div>
            <h1>Sign up</h1>
            <Link to="/signin">Click here to sign in</Link>
        </div>
    )
}

export default Signup
