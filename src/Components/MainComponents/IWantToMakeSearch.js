import React from 'react'
import './MainComponentsCss.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const IWantToMakeSearch = () => {
    return (
        <>
            <div id='i-want-to-make'>
                <div>
                    <div id='i-want-to-make-container'>
                        <div id='i-want-to-make-search-bar-and-text-container'>
                            <div id='i-want-to-make-search-bar-and-text'>
                                <h3>I WANT TO MAKE</h3>
                                <div id='i-want-to-make-search-bar'>
                                    <AiOutlineSearch />
                                    <input type='search' placeholder='Search here or try our suggestions below'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='i-want-to-make-suggested'>
                        <div id='i-want-to-make-suggested-container'>
                            <div><Link to=''>air fryer recipes</Link></div>
                            <div><Link to=''>slow-cooker faves</Link></div>
                            <div><Link to=''>top copycat recipes</Link></div>
                            <div><Link to=''>japanese foods</Link></div>
                            <div><Link to=''>weeknight eats</Link></div>
                            <div><Link to=''>healthy lunches</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IWantToMakeSearch