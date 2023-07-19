import React from 'react'
import './RedirectedPagesCss.css'
import Navbar from '../MainComponents/Navbar'
import FindMoreRecipes from '../MainComponents/FindMoreRecipes'
import Footer from '../MainComponents/Footer'

const UserSettingsPage = () => {
    return (
        <>
            <Navbar />
            <FindMoreRecipes />
            <Footer />
        </>
    )
}

export default UserSettingsPage