import React from 'react'
import './RedirectedPagesCss.css'
import Navbar from '../MainComponents/Navbar'
import Footer from '../MainComponents/Footer'
import IWantToMakeSearch from '../MainComponents/IWantToMakeSearch'
import { Link, NavLink } from 'react-router-dom'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const SavedPageRecipes = () => {
    // const token = localStorage.getItem('recievedToken')

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://food-recipe-backend-lctk.onrender.com/recipes/getyourownrecipe', {
            // headers: {
            //     'Authorization': "Bearer " + token
            // }
        })
            .then((response) => setData(response.data))
            .catch((error) => console.log("Error", error))
        console.log(data)
    }, [data])

    // const email = localStorage.getItem('email')

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
                <div id='saved-page-recipes'>
                    <div id='discover-recipes-card'>
                        <BsFillPlusCircleFill id='saved-page-recipes-plus-icon' />
                        <h3>DISCOVER <br /> RECIPES</h3>
                        <p>..... or .....</p>
                        <Link to='/addyourownrecipe'>Add Your Own Recipe</Link>
                    </div>
                    {
                        data && data.map((element, index) => (
                            <div id='added-recipes-card'>
                                <img src='' alt=''></img>
                                <img src='' alt=''></img>
                                <h3>{element.recipeTitle.toUpperCase()}</h3>
                                {/* <p>By {email.substring(0, email.length - 10)}</p> */}
                            </div>
                        ))
                    }
                </div>
            </div >
            <IWantToMakeSearch />
            <Footer />
        </>
    )
}

export default SavedPageRecipes