import React from 'react'
import './MainComponentsCss.css'
import { BsSearch } from 'react-icons/bs'

const FindMoreRecipes = () => {
    return (
        <>
            <div id='find-more-recipes'>
                <div id='find-more-recipes-container'>
                    <h2>FIND MORE RECIPES</h2>
                    <div id='find-more-recipes-search-bar'>
                        <BsSearch />
                        <input type='search' placeholder="I'm Craving..."></input>
                    </div>
                    <button>SEARCH</button>
                </div>
            </div>
        </>
    )
}

export default FindMoreRecipes