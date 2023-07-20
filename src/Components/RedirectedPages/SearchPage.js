import React from 'react'
import './RedirectedPagesCss.css'
import Navbar from '../MainComponents/Navbar'
import { AiOutlineSearch } from 'react-icons/ai'
import IWantToMakeSearch from '../MainComponents/IWantToMakeSearch'
import Footer from '../MainComponents/Footer'

const SearchPage = () => {

    return (
        <>
            <Navbar />
            <div id='search-page'>
                <div id='search-page-i-want-to-make'>
                    <div id='search-page-i-want-to-make-container'>
                        <div id='search-page-i-want-to-make-search-bar-and-text'>
                            <h3>I WANT TO MAKE</h3>
                            <div id='search-page-i-want-to-make-search-bar'>
                                <AiOutlineSearch id='search-page-i-want-to-make-search-bar-search-icon' />
                                <input type='search'></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='search-page-your-recent-searches'>
                    <p>YOUR RECENT SEARCHES</p>
                </div>
            </div>
            <IWantToMakeSearch />
            <Footer />
        </>
    )
}

export default SearchPage