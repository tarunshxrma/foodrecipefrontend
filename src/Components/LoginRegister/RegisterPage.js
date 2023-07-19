import React from 'react'
import './LoginRegisterCss.css'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const RegisterPage = ({ toggleLoginSignup }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (email && password) {
            try {
                await axios.post('https://food-recipe-backend-lctk.onrender.com/users/register', {
                    name, phone, email, password
                })
                    .then(res => {
                        if (res.data === "User already registered Please try to login") {
                            alert("User already registered Please try to login")
                        }
                        else if (res.data === "User Registered Successfully") {
                            alert("User Registered Successfully")
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
            <div id='register-page'>
                <div id='register-form'>
                    <h2>CREATE AN ACCOUNT</h2>
                    <p id='register-form-tagline'>Save recipes across devices,<br /> write reviews, and <br />share your own photos</p>
                    <form action='POST'>
                        <label>NAME</label><br />
                        <input type='text' placeholder='Name' onChange={(e) => { setName(e.target.value) }} /><br />
                        <label>PHONE</label><br />
                        <input type='tel' placeholder='Phone no.' onChange={(e) => { setPhone(e.target.value) }} required /><br />
                        <label>EMAIL</label><br />
                        <input type='email' placeholder='your@email.com' onChange={(e) => { setEmail(e.target.value) }} required /><br />
                        <label>PASSWORD</label><br />
                        <input type={showPassword ? 'text' : 'password'} placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} required /><br />
                        <button onClick={toggleShowPassword} id='show-hide-register-page'>{showPassword ? "HIDE" : "SHOW"}</button>
                        <input type='checkbox'></input>
                        <div id='agreement-clause'>
                            <label>I agree to the <Link to='https://corporate.discovery.com/visitor-agreement/' target='_blank'>Visitor Agreement</Link> and <br />have read the <Link to='https://corporate.discovery.com/privacy-policy/' target='_blank'>Privacy Notice</Link>.<br /> I understand Discovery and its <Link to='https://corporate.discovery.com/businesses-and-brands/' target='_blank'>affiliates</Link> <br /> may use my email address to send <br /> updates, ads, and offers. <br /> Learn more <Link to='https://corporate.discovery.com/privacy-policy/' target='_blank'>here</Link></label><br />
                        </div>
                        <input type='submit' onClick={handleSubmit} value='SIGN UP' id='register-btn' />
                    </form>
                    <p>Already a member?<span onClick={toggleLoginSignup}>Login</span></p>
                </div>
            </div>
        </>
    )
}

export default RegisterPage