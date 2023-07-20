import React from 'react'
import './RedirectedPagesCss.css'
import Navbar from '../MainComponents/Navbar'
import Footer from '../MainComponents/Footer'
import IWantToMakeSearch from '../MainComponents/IWantToMakeSearch'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const SavedPageRecipes = ({ recipe }) => {
    // const token = localStorage.getItem('recievedToken')

    const navigate = useNavigate()

    const [data, setData] = useState([])

    const [RECIPE, setRECIPE] = useState([])

    useEffect(() => {
        axios.get('https://food-recipe-backend.onrender.com/recipes/getyourownrecipe', {
            // headers: {
            //     'Authorization': "Bearer " + token
            // }
        })
            .then((response) => setData(response.data))
            .catch((error) => console.log("Error", error))
        console.log(data)
    }, [data])

    useEffect(() => {
        setRECIPE(recipe)
    }, [recipe])

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
                        <BsFillPlusCircleFill id='saved-page-recipes-plus-icon' onClick={() => navigate('/')} />
                        <h3 onClick={() => navigate('/')}>DISCOVER <br /> RECIPES</h3>
                        <p>..... or .....</p>
                        <Link to='/addyourownrecipe'>Add Your Own Recipe</Link>
                    </div>
                    {
                        RECIPE.map((element, index) => (
                            <div id='saved-page-added-from-recipes'>
                                <Link to={`/recipedescription/${element.recipe.label}`} ><img src={element.recipe.image} alt=''></img></Link>
                                <h3>{element.recipe.label}</h3>
                            </div>
                        ))
                    }
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