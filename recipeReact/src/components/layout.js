import React from "react";
import NavigationBar from "./navbar";
import Home from "./home";
import Recipes from "./recipes";
import AddNewRecipe from "./addNewRecipe";
import {Routes, Route } from "react-router-dom";
import ViewRecipe from "./viewRecipe";
const Layout = () => {

    return (
      <>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/recipes' element={<Recipes/>}/>
          <Route exact path='/addRecipes' element={<AddNewRecipe/>}/>
          <Route exact path='/recipe/:id' element={<ViewRecipe/>}/>
        </Routes>
        
      </> 
    );
  };

export default Layout