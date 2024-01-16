import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout pages/Layout'
import MyRecipes from './pages/MyRecipes'
import SearchRecipes from './pages/SearchRecipes'
import CookingTips from './pages/CookingTips'
import Signup from './pages/Signup'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="recipes" element={<MyRecipes/>}/>
        <Route path="search" element={<SearchRecipes/>}/>
        <Route path="tips" element={<CookingTips/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
