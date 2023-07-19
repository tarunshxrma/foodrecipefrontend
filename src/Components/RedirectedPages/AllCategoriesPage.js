import React from 'react'
import './RedirectedPagesCss.css'
import Navbar from '../MainComponents/Navbar'
import { MdArrowBack } from 'react-icons/md'
import IWantToMakeSearch from '../MainComponents/IWantToMakeSearch'
import { Link } from 'react-router-dom'
import Footer from '../MainComponents/Footer'

const AllCategoriesPage = () => {
    return (
        <>
            <Navbar />
            <div id='all-categories'>
                <div id='all-categories-container'>
                    <Link to='/'><p><MdArrowBack />HOME</p></Link>
                    <h2>ALL CATEGORIES</h2>
                    <div id='all-categories-letters'>
                        <span>123</span>
                        <Link to=''>A</Link>
                        <Link to=''>B</Link>
                        <Link to=''>C</Link>
                        <Link to=''>D</Link>
                        <Link to=''>E</Link>
                        <Link to=''>F</Link>
                        <Link to=''>G</Link>
                        <Link to=''>H</Link>
                        <Link to=''>I</Link>
                        <Link to=''>J</Link>
                        <Link to=''>K</Link>
                        <Link to=''>L</Link>
                        <Link to=''>M</Link>
                        <Link to=''>N</Link>
                        <Link to=''>O</Link>
                        <Link to=''>P</Link>
                        <Link to=''>Q</Link><br />
                        <Link to=''>R</Link>
                        <Link to=''>S</Link>
                        <Link to=''>T</Link>
                        <Link to=''>U</Link>
                        <Link to=''>V</Link>
                        <Link to=''>W</Link>
                        <Link to=''>X</Link>
                        <Link to=''>Y</Link>
                        <Link to=''>Z</Link>
                    </div>
                    <div id='all-catgories-quick-links-container'>
                        <Link to=''>30-Minute Chicken</Link>
                        <Link to=''>4th Of July Dessert</Link>
                    </div>
                </div>
            </div>
            <IWantToMakeSearch />
            <Footer />
        </>
    )
}

export default AllCategoriesPage