import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../MainComponents/Navbar'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'
import { BsBookmark } from 'react-icons/bs'
import { TfiDownload } from 'react-icons/tfi'
import { BsPrinter } from 'react-icons/bs'
import { BsArrow90DegRight } from 'react-icons/bs'
import { BsCamera } from 'react-icons/bs'
import Footer from '../MainComponents/Footer'
import FindMoreRecipes from '../MainComponents/FindMoreRecipes'

const RecipeCategoriesDescriptionPage = ({ saveRecipe }) => {
    const [data, setData] = useState()
    const { recipename } = useParams()

    const APP_ID = 'e95f07ed'
    const APP_KEY = 'a26cf3b8f2504e6eb9e9db8524fe4a27'

    useEffect(() => {
        axios.get(`https://api.edamam.com/search?q=${recipename}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then((response) => setData(response.data.hits))
            .catch((error) => console.log("Error", error))
    }, [recipename])

    return (
        <>
            <Navbar />
            <div id='recipe-categories-description-page'>
                <div id='recipe-categories-description-page-previous-next'>
                    <h3><GrPrevious id='recipe-categories-description-page-previous-icon' /> PREVIOUS</h3>
                    <h3>NEXT <GrNext id='recipe-categories-description-page-next-icon' /></h3>
                </div>
                {
                    data && data.filter((item) => { return item.recipe.label === recipename }).slice(0, 1).map((element, index) => (
                        <div id='recipe-categories-description-page-container' key={index}>
                            <h2>{element.recipe.label}</h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                            <div id='recipe-categories-description-page-container-icons'>
                                <div onClick={() => {
                                    saveRecipe(element)
                                    alert("Recipe Saved Successfully!!!")
                                }}><BsBookmark /></div>
                                <div><TfiDownload /></div>
                                <div>< BsPrinter /></div>
                                <div><BsArrow90DegRight /></div>
                                <div><BsCamera /> I MADE THIS</div>
                            </div>
                            <img src={element.recipe.image} alt=''></img>
                            <h3>INGREDIENTS</h3>
                            {element.recipe.ingredientLines.map((item) => (<p>{item}</p>))}
                            <div id='recipe-categories-description-page-reviews'>
                                <div>
                                    <h3>REVIEWS</h3>
                                    <div>

                                    </div>
                                </div>
                                <div id='recipe-categories-description-page-reviews-text'><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5></div>
                                <div id='recipe-categories-description-page-reviews-text'><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5></div>
                                <div id='recipe-categories-description-page-reviews-text'><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5></div>
                                <div id='recipe-categories-description-page-reviews-text'><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5></div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <FindMoreRecipes />
            <Footer />
        </>
    )
}

export default RecipeCategoriesDescriptionPage