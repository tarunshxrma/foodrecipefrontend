import React from 'react'
import './LoginRegisterCss.css'
import { useState } from 'react'
import axios from 'axios'

const LoginPage = ({ toggleLoginSignup, togglePopup }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (email && password) {
            try {
                await axios.post('https://food-recipe-backend-lctk.onrender.com/users/login', {
                    email, password
                })
                    .then(res => {
                        const token = res.data.token
                        const email = res.data.email
                        if (res.data.message === "User logged in successfully" && token) {
                            localStorage.setItem('recievedToken', token)
                            localStorage.setItem('email', email)
                            togglePopup()
                        }
                        else if (res.data === "User is not registered Register first") {
                            alert("User is not registered Please register first!!")
                        }
                        else if (res.data === "Password does not match Try entering the correct password") {
                            alert("Password does not match Try entering the correct password!!")
                        }
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
            catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <>
            <div id='login-page'>
                <div id='login-form'>
                    <h2>LOGIN</h2>
                    <form action='POST'>
                        <label>EMAIL</label><br />
                        <input type='email' placeholder='your@email.com' onChange={(e) => { setEmail(e.target.value) }} className='login-register' required /><br />
                        <label >PASSWORD</label><br />
                        <input type={showPassword ? 'text' : 'password'} placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} className='login-register' required /><br />
                        <button onClick={toggleShowPassword} id='show-hide-login-page'>{showPassword ? "HIDE" : "SHOW"}</button>
                        <input type='submit' onClick={handleSubmit} value='LOG IN' id='login-btn' />
                    </form>
                    <p>Don't have an account yet?<span onClick={toggleLoginSignup}>Sign Up</span></p>
                </div>
            </div>
        </>
    )
}

export default LoginPage