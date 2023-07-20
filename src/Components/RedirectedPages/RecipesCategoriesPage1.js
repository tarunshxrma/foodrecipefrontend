import React, { useEffect, useState } from 'react'
import './RedirectedPagesCss.css'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../MainComponents/Navbar'
import RecipesCategoriesPage1PinterestIcon from '../Assets/RecipesCategoriesPage1/recipes-categories-page1-pinterest-icon.png'
import RecipesCategoriesPage1FacebookIcon from '../Assets/RecipesCategoriesPage1/recipes-categories-page1-facebook-icon.png'
import RecipesCategoriesPage1MailIcon from '../Assets/RecipesCategoriesPage1/recipes-categories-page1-mail-icon.png'
import Footer from '../MainComponents/Footer'
import IWantToMakeSearch from '../MainComponents/IWantToMakeSearch'
import axios from 'axios'

const RecipesCategoriesPage1 = () => {
    const [data, setData] = useState([])

    const params = useParams()

    const APP_ID = 'e95f07ed'
    const APP_KEY = 'a26cf3b8f2504e6eb9e9db8524fe4a27'

    useEffect(() => {
        axios.get(`https://api.edamam.com/search?q=${params.recipename}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then((response) => setData(response.data.hits))
    }, [params.recipename])


    return (
        <>
            <Navbar />
            <div id='recipe-categories-page-one'>
                <div id='recipe-categories-page-one-heading-descriptiontext-container'>
                    <h2 id='recipe-categories-page-one-heading'>TOP {data.length} {params.recipename.toUpperCase()} RECIPES </h2>
                    <p id='recipe-categories-page-one-descriptiontext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div id='recipe-categories-page-one-social-icons'>
                        <Link to='https://in.pinterest.com/fooddotcom/' target='_blank'><img src={RecipesCategoriesPage1PinterestIcon} alt='pinterest-icon'></img></Link>
                        <Link to='https://www.facebook.com/food.com/' target='_blank'><img src={RecipesCategoriesPage1FacebookIcon} alt='facebook-icon'></img></Link>
                        <Link to='https://help.food.com/hc/en-us' target='_blank'><img src={RecipesCategoriesPage1MailIcon} alt='mail-icon'></img></Link>
                    </div>
                </div>
                <div id='recipe-categories-page-recipes-container'>
                    <div>
                        {
                            data.map((element, index) => (
                                <div id='recipe-categories-page-recipes' key={index}>
                                    <Link to={`/recipedescription/${element.recipe.label}`} ><img src={element.recipe.image} alt=''></img></Link>
                                    <Link to={`/recipedescription/${element.recipe.label}`} >
                                        <div id='recipe-categories-page-text'>
                                            <h5>RECIPE</h5>
                                            <h2>{element.recipe.label}</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <IWantToMakeSearch />
            <Footer />
        </>
    )
}

export default RecipesCategoriesPage1