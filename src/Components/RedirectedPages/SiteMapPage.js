import React from 'react'
import './RedirectedPagesCss.css'
import Navbar from '../MainComponents/Navbar'
import IWantToMakeSearch from '../MainComponents/IWantToMakeSearch'
import { Link } from 'react-router-dom'
import Footer from '../MainComponents/Footer'

const SiteMapPage = () => {
    return (
        <>
            <Navbar />
            <h2 id='site-map-heading'>SITE MAP</h2>
            <div id='site-map'>
                <div id='site-map-container'>
                    <div>
                        <h3>RECIPES</h3>
                        <Link to='/recipes/breakfastandbrunch'>Breakfast & Brunch Recipes</Link>
                        <Link to='/recipes/lunch'>Lunch Recipes</Link>
                        <Link to='/recipes/appetizersandsnack'>Appetizers & Snack Recipes</Link>
                        <Link to='/recipes/dinne'>Dinner Recipes</Link>
                        <Link to='/recipes/desert'>Desert Recipes</Link>
                        <Link to='/recipes/drinkandcocktail'>Drink & Cocktail Recipes</Link>
                        <Link to='/recipes/sidedish'>Side Dish Recipes</Link>
                        <Link to='/recipes/grillingandbbq'>Grill & BBQ Recipes</Link>
                        <h3>POPULAR</h3>
                        <Link to='/recipes/trendingnow'>Trending Now</Link>
                        <Link to='/recipes/casserole'>Casserole Recipes</Link>
                        <Link to='/recipes/chilli'>Chilli Recipes</Link>
                        <Link to='/recipes/soup'>Soup Recipes</Link>
                        <Link to='/recipes/pasta'>Pasta Recipes</Link>
                        <Link to='/recipes/bread'>Bread Recipes</Link>
                        <Link to='/recipes/cookie'>Cookie Recipes</Link>
                        <Link to='/recipes/salad'>Salad Recipes</Link>
                    </div>
                    <div>
                        <h3>MEAT & SEAFOOD</h3>
                        <Link to='/recipes/chicken'>Chicken Recipes</Link>
                        <Link to='/recipes/salmon'>Salmon recipes</Link>
                        <Link to='/recipes/porkchop'>Pork Chop recipes</Link>
                        <Link to='/recipes/groundbeef'>Ground Beef Recipes</Link>
                        <Link to='/recipes/shrimp'>Shrimp Recipes</Link>
                        <h3>HEALTHY & DIET</h3>
                        <Link to='/recipes/keto'>Keto recipes</Link>
                        <Link to='/recipes/healthy'>Healthy Recipes</Link>
                        <Link to='/recipes/vegetarian'>Vegetarian Recipes</Link>
                        <Link to='/recipes/vegan'>Vegan Recipes</Link>
                        <Link to='/recipes/mediterranean'>Mediterranean Recipes</Link>
                        <Link to='/recipes/weightwatchers'>Weight Watchers Recipes</Link>
                        <Link to='/recipes/lowcarb'>Low Carb recipes</Link>
                        <Link to='/recipes/glutenfree'>Gluten-Free Recipes</Link>
                    </div>
                    <div>
                        <h3>HOLIDAYS</h3>
                        <Link to='/recipes/dinnerparty'>Dinner Party Recipes</Link>
                        <Link to='/recipes/gameday'>Game Day Recipes</Link>
                        <Link to='/recipes/valentinesday'>Valentine's Day recipes</Link>
                        <Link to='/recipes/stpatricksday'>St. Patrick's Day Recipes</Link>
                        <Link to='/recipes/easter'>Easter Recipes</Link>
                        <Link to='/recipes/cincodemayo'>inco de Mayo Day Recipes</Link>
                        <Link to='/recipes/mothersday'>Mother's Day Recipes</Link>
                        <Link to='/recipes/memorialday'>Memorial Day Recipes</Link>
                        <h3>CUISINE</h3>
                        <Link to='/recipes/mexican'>Mexican recipes</Link>
                        <Link to='/recipes/italian'>Italian Recipes</Link>
                        <Link to='/recipes/indian'>Indian Recipes</Link>
                        <Link to='/recipes/thai'>Thai Recipes</Link>
                        <Link to='/recipes/korean'>Korean recipes</Link>
                        <Link to='/recipes/french'>French rceipes</Link>
                        <Link to='/recipes/latinamerican'>Latin American Recipes</Link>
                        <Link to='/recipes/chinese'>Chinese Recipes</Link>
                    </div>
                    <div>
                        <h3>SEASONAL</h3>
                        <Link to='/recipes/spring'>Spring Recipes</Link>
                        <Link to='/recipes/summer'>Summer Recipes</Link>
                        <Link to='/recipes/fall'>Fall Recipes</Link>
                        <Link to='/recipes/winter'>Winter Recipes</Link>
                    </div>
                </div>
            </div>
            <IWantToMakeSearch />
            <Footer />
        </>
    )
}

export default SiteMapPage