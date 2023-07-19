import React from 'react'
import './RedirectedPagesCss.css'
import Navbar from '../MainComponents/Navbar'
import Footer from '../MainComponents/Footer'
import IWantToMakeSearch from '../MainComponents/IWantToMakeSearch'
import { NavLink } from 'react-router-dom'
import { BsFillPlusCircleFill } from 'react-icons/bs'

const SavedPageMyBoard = () => {
    return (
        <>
            <Navbar />
            <div id='saved-page'>
                <div id='saved-page-header'>
                    <h2>SAVES</h2>
                </div>
                <div id='saved-page-recipes-my-boards'>
                    <NavLink to='/saved/recipes'>RECIPES</NavLink>
                    <NavLink to='/saved/myboards'>MY BOARDS</NavLink>
                </div>
                <div id='saved-page-my-boards'>
                    <div id='new-board-card'>
                        <BsFillPlusCircleFill id='saved-page-my-boards-plus-icon' />
                        <h3>NEW BOARD</h3>
                    </div>
                </div>
            </div>
            <IWantToMakeSearch />
            <Footer />
        </>
    )
}

export default SavedPageMyBoard