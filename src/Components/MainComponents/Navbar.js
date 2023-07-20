import React, { useState } from "react";
import "./MainComponentsCss.css";
import NavbarSearchIcon from "../Assets/Navbar/navbar-search-icon.png";
import NavbarSavedIcon from "../Assets/Navbar/navbar-saved-icon.png";
import NavbarProfileIcon from "../Assets/Navbar/navbar-profile-icon.png";
import NavbarLoggedInIcon from '../Assets/Navbar/navbar-logged-in-icon.png'
import { Link, useNavigate } from "react-router-dom";
import LoginPage from "../LoginRegister/LoginPage";
import RegisterPage from "../LoginRegister/RegisterPage";
import { GrFormClose } from 'react-icons/gr'
import { RxCross2 } from 'react-icons/rx'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    const [popup, setPopup] = useState(false);
    const [loginSignup, setLoginSignup] = useState(false)

    const isLogged = localStorage.getItem('recievedToken')

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/')
    }
    const togglePopup = () => {
        setPopup(!popup)
    }

    const toggleLoginSignup = () => {
        setLoginSignup(!loginSignup)
    }

    const [isMobile, setIsMobile] = useState(false);


    return (
        <>
            <div id="navbar">
                <Link to="/" id="navbar-heading-link">
                    <h1>Food<span id="navbar-heading-dot">.</span></h1>
                </Link>
                <button id='mobile-menu-icon' onClick={() => { setIsMobile(!isMobile) }}>
                    {isMobile ? <RxCross2 /> : <GiHamburgerMenu />}
                </button>
                <div id={isMobile ? "nav-links-mobile" : "navbar-recipes-categories"} onClick={() => { setIsMobile(false) }}>
                    <div className="navbar-recipes-categories-dropdown">
                        <ul className="navbar-recipes-categories-dropdown-button">RECIPES</ul>
                        <div className="navbar-recipes-categories-dropdown-content">
                            <Link to='/recipes/breakfast and brunch' className="navbar-recipes-categories-dropdown-links">Breakfast & Brunch Recipes</Link>
                            <Link to='/recipes/lunch' className="navbar-recipes-categories-dropdown-links">Lunch Recipes</Link>
                            <Link to='/recipes/appetizers and snack' className="navbar-recipes-categories-dropdown-links">Appetizers & Snack Recipes</Link>
                            <Link to='/recipes/dinner recipes' className="navbar-recipes-categories-dropdown-links">Dinner Recipes</Link>
                            <Link to='/recipes/desert' className="navbar-recipes-categories-dropdown-links">Desert Recipes</Link>
                            <Link to='/recipes/drink and cocktail' className="navbar-recipes-categories-dropdown-links">Drink & Cocktail Recipes</Link>
                            <Link to='/recipes/sidedish' className="navbar-recipes-categories-dropdown-links">Side Dish Recipes</Link>
                            <Link to='/recipes/grilling and bbq' className="navbar-recipes-categories-dropdown-links">Grill & BBQ Recipes</Link>
                        </div>
                    </div>
                    <div className="navbar-recipes-categories-dropdown">
                        <ul className="navbar-recipes-categories-dropdown-button">POPULAR</ul>
                        <div className="navbar-recipes-categories-dropdown-content">
                            <Link to='/recipes/trending now' className="navbar-recipes-categories-dropdown-links">Trending Now</Link>
                            <Link to='/recipes/casserole' className="navbar-recipes-categories-dropdown-links">Casserole Recipes</Link>
                            <Link to='/recipes/chilli' className="navbar-recipes-categories-dropdown-links">Chilli Recipes</Link>
                            <Link to='/recipes/soup' className="navbar-recipes-categories-dropdown-links">Soup Recipes</Link>
                            <Link to='/recipes/pasta' className="navbar-recipes-categories-dropdown-links">Pasta Recipes</Link>
                            <Link to='/recipes/bread' className="navbar-recipes-categories-dropdown-links">Bread Recipes</Link>
                            <Link to='/recipes/cookie' className="navbar-recipes-categories-dropdown-links">Cookie Recipes</Link>
                            <Link to='/recipes/salad' className="navbar-recipes-categories-dropdown-links">Salad Recipes</Link>
                        </div>
                    </div>
                    <div className="navbar-recipes-categories-dropdown">
                        <ul className="navbar-recipes-categories-dropdown-button">MEAT & SEAFOOD</ul>
                        <div className="navbar-recipes-categories-dropdown-content">
                            <Link to='/recipes/chicken' className="navbar-recipes-categories-dropdown-links">Chicken Recipes</Link>
                            <Link to='/recipes/salmon' className="navbar-recipes-categories-dropdown-links">Salmon recipes</Link>
                            <Link to='/recipes/porkchop' className="navbar-recipes-categories-dropdown-links">Pork Chop recipes</Link>
                            <Link to='/recipes/groundbeef' className="navbar-recipes-categories-dropdown-links">Ground Beef Recipes</Link>
                            <Link to='/recipes/shrimp' className="navbar-recipes-categories-dropdown-links">Shrimp Recipes</Link>
                        </div>
                    </div>
                    <div className="navbar-recipes-categories-dropdown">
                        <ul className="navbar-recipes-categories-dropdown-button">HEALTHY & DIET</ul>
                        <div className="navbar-recipes-categories-dropdown-content">
                            <Link to='/recipes/keto' className="navbar-recipes-categories-dropdown-links">Keto recipes</Link>
                            <Link to='/recipes/healthy' className="navbar-recipes-categories-dropdown-links">Healthy Recipes</Link>
                            <Link to='/recipes/vegetarian' className="navbar-recipes-categories-dropdown-links">Vegetarian Recipes</Link>
                            <Link to='/recipes/vegan' className="navbar-recipes-categories-dropdown-links">Vegan Recipes</Link>
                            <Link to='/recipes/mediterranean' className="navbar-recipes-categories-dropdown-links">Mediterranean Recipes</Link>
                            <Link to='/recipes/weightwatchers' className="navbar-recipes-categories-dropdown-links">Weight Watchers Recipes</Link>
                            <Link to='/recipes/lowcarb' className="navbar-recipes-categories-dropdown-links">Low Carb recipes</Link>
                            <Link to='/recipes/glutenfree' className="navbar-recipes-categories-dropdown-links">Gluten-Free Recipes</Link>
                        </div>
                    </div>
                    <div className="navbar-recipes-categories-dropdown">
                        <ul className="navbar-recipes-categories-dropdown-button">HOLIDAYS</ul>
                        <div className="navbar-recipes-categories-dropdown-content">
                            <Link to='/recipes/dinner party' className="navbar-recipes-categories-dropdown-links">Dinner Party Recipes</Link>
                            <Link to='/recipes/game day' className="navbar-recipes-categories-dropdown-links">Game Day Recipes</Link>
                            <Link to='/recipes/valentines day' className="navbar-recipes-categories-dropdown-links">Valentine's Day recipes</Link>
                            <Link to='/recipes/st patricks day' className="navbar-recipes-categories-dropdown-links">St. Patrick's Day Recipes</Link>
                            <Link to='/recipes/easter' className="navbar-recipes-categories-dropdown-links">Easter Recipes</Link>
                            <Link to='/recipes/cinco de mayo' className="navbar-recipes-categories-dropdown-links">Cinco de Mayo Day Recipes</Link>
                            <Link to='/recipes/mothers day' className="navbar-recipes-categories-dropdown-links">Mother's Day Recipes</Link>
                            <Link to='/recipes/memorial day' className="navbar-recipes-categories-dropdown-links">Memorial Day Recipes</Link>
                        </div>
                    </div>
                    <div className="navbar-recipes-categories-dropdown">
                        <ul className="navbar-recipes-categories-dropdown-button">CUISINE</ul>
                        <div className="navbar-recipes-categories-dropdown-content">
                            <Link to='/recipes/mexican' className="navbar-recipes-categories-dropdown-links">Mexican recipes</Link>
                            <Link to='/recipes/italian' className="navbar-recipes-categories-dropdown-links">Italian Recipes</Link>
                            <Link to='/recipes/indian' className="navbar-recipes-categories-dropdown-links">Indian Recipes</Link>
                            <Link to='/recipes/thai' className="navbar-recipes-categories-dropdown-links">Thai Recipes</Link>
                            <Link to='/recipes/korean' className="navbar-recipes-categories-dropdown-links">Korean recipes</Link>
                            <Link to='/recipes/french' className="navbar-recipes-categories-dropdown-links">French rceipes</Link>
                            <Link to='/recipes/latin american' className="navbar-recipes-categories-dropdown-links">Latin American Recipes</Link>
                            <Link to='/recipes/chinese' className="navbar-recipes-categories-dropdown-links">Chinese Recipes</Link>
                        </div>
                    </div>
                    <div className="navbar-recipes-categories-dropdown">
                        <ul className="navbar-recipes-categories-dropdown-button">SEASONAL</ul>
                        <div className="navbar-recipes-categories-dropdown-content">
                            <Link to='/recipes/spring' className="navbar-recipes-categories-dropdown-links">Spring Recipes</Link>
                            <Link to='/recipes/summer' className="navbar-recipes-categories-dropdown-links">Summer Recipes</Link>
                            <Link to='/recipes/fall' className="navbar-recipes-categories-dropdown-links">Fall Recipes</Link>
                            <Link to='/recipes/winter' className="navbar-recipes-categories-dropdown-links">Winter Recipes</Link>
                        </div>
                    </div>
                </div>
                <div id="navbar-search-saved-profile-icons">
                    <Link to='/search'><img src={NavbarSearchIcon} alt="search-icon"></img></Link>
                    <Link to='/saved/recipes'><img src={NavbarSavedIcon} alt="saved-icon"></img></Link>
                    {isLogged ?
                        <div className="navbar-logged-in-dropdown">
                            <img src={NavbarLoggedInIcon} alt="profile-icon"></img>
                            <div className="navbar-logged-in-dropdown-content">
                                <Link to='/userprofile/activity' className="navbar-logged-in-dropdown-links">Profile</Link>
                                <Link to='/addyourownrecipe' className="navbar-logged-in-dropdown-links">Add a Recipe</Link>
                                <Link to='/usersettings' className="navbar-logged-in-dropdown-links">User Settings</Link>
                                <Link to='/' className="navbar-logged-in-dropdown-links" onClick={logout}>Logout</Link>
                            </div>
                        </div>
                        :
                        <img src={NavbarProfileIcon} alt="profile-icon" onClick={togglePopup}></img>
                    }
                </div>
            </div>

            {popup ?
                <div className="navbar-login-register-popup">
                    <div className="navbar-login-register-overlay" onClick={togglePopup}></div>
                    <div className={loginSignup ? "navbar-login-register-popup-content-for-register" : "navbar-login-register-popup-content-for-login"}>
                        <GrFormClose onClick={togglePopup} className="navbar-login-register-close-btn" />
                        {loginSignup ? <RegisterPage toggleLoginSignup={toggleLoginSignup} /> : <LoginPage toggleLoginSignup={toggleLoginSignup} togglePopup={togglePopup} />}
                    </div>
                </div >
                :
                null
            }
        </>
    );
};

export default Navbar;
