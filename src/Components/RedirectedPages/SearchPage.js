import React, { useState } from 'react'
import './RedirectedPagesCss.css'
import Navbar from '../MainComponents/Navbar'
import { AiOutlineSearch } from 'react-icons/ai'
import IWantToMakeSearch from '../MainComponents/IWantToMakeSearch'
import Footer from '../MainComponents/Footer'
import axios from 'axios'

const SearchPage = () => {

    const [search, setSearch] = useState('')
    const [data, setData] = useState([])

    const APP_ID = 'e95f07ed'
    const APP_KEY = 'a26cf3b8f2504e6eb9e9db8524fe4a27'

    const getSearchRecipes = (searchQuery) => {
        axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then((response) => setData(response.data.hits))
            .catch((error) => console.log("Error", error))
        console.log(data)
    }

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
                                <input type='search' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                                <button onClick={() => getSearchRecipes(search)}>search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='search-page-your-recent-searches'>
                    <p>YOUR RECENT SEARCHES</p>
                </div>
            </div>
            <div>
                {
                    data.map((element, index) => (
                        <div>
                            <img src={element.recipe.image} alt=''></img>
                            <h3>{element.recipe.label}</h3>
                        </div>
                    ))
                }
            </div>
            <IWantToMakeSearch />
            <Footer />
        </>
    )
}

export default SearchPage