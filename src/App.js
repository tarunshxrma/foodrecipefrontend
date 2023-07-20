import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/MainComponents/Home'
import PageNotFound from './Components/MainComponents/PageNotFound'
import SearchPage from './Components/RedirectedPages/SearchPage'
import RecipesCategoriesPage1 from './Components/RedirectedPages/RecipesCategoriesPage1'
import LoginPage from './Components/LoginRegister/LoginPage'
import RegisterPage from './Components/LoginRegister/RegisterPage'
import UserProfilePage from './Components/RedirectedPages/UserProfilePage'
import UserSettingsPage from './Components/RedirectedPages/UserSettingsPage'
import AllCategoriesPage from './Components/RedirectedPages/AllCategoriesPage'
import SiteMapPage from './Components/RedirectedPages/SiteMapPage'
import AboutUsPage from './Components/RedirectedPages/AboutUsPage'
import ScrollToTop from './Components/MainComponents/ScrollToTop'
import SavedPageRecipes from './Components/RedirectedPages/SavedPageRecipes'
import SavedPageMyBoard from './Components/RedirectedPages/SavedPageMyBoard'
import AddYourOwnRecipePage from './Components/RedirectedPages/AddYourOwnRecipePage'
import RecipeCategoriesDescriptionPage from './Components/RedirectedPages/RecipeCategoriesDescriptionPage'
import { useState } from 'react'

const App = () => {

  const [recipe, setRecipe] = useState([]);
  console.log(recipe)
  const saveRecipe = (data) => {
    setRecipe([...recipe, { ...data }])
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/recipes/:recipename' element={<RecipesCategoriesPage1 />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/userprofile/:filtername' element={<UserProfilePage />}></Route>
        <Route path='/addyourownrecipe' element={<AddYourOwnRecipePage />}></Route>
        <Route path='/usersettings' element={<UserSettingsPage />}></Route>
        <Route path='/allcategories' element={<AllCategoriesPage />}></Route>
        <Route path='/sitemap' element={<SiteMapPage />}></Route>
        <Route path='/aboutus' element={<AboutUsPage />}></Route>
        <Route path='/saved/recipes' element={<SavedPageRecipes recipe={recipe} />}></Route>
        <Route path='/saved/myboards' element={<SavedPageMyBoard />}></Route>
        <Route path='/recipedescription/:recipename' element={<RecipeCategoriesDescriptionPage saveRecipe={saveRecipe} />}></Route>






        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
