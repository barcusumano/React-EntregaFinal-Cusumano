import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//React Router Dom

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

//Components
import NavBar from './Components/NavBar/NavBar'


//Pages

import HomePage from "./Pages/HomePage/HomePage"
import Catalog from "./Pages/Catalog/Catalog"
import DetailPage from './Pages/DetailPage/DetailPage';
import Categories from './Pages/Categories/Categories';
import WizardingWorld from './Pages/WizardingWorld/WizardingWorld';
import Pokemon from './Pages/Pokemon/Pokemon';
import ShoppingPage from './Pages/ShoppingPage/shoppingPage';


function App() {

  return (
    <>
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/WizardingWorld" element={<WizardingWorld/>}/>
          <Route path="/Pokemon" element={<Pokemon/>}/>
          <Route path="/categories/:franchise" element={<Categories/>}/>
          <Route path="/detailpage/:id" element={<DetailPage/>}/>
          <Route path="/ShoppingPage" element={<ShoppingPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
