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
import WizardingWorld from './Pages/WizardingWorld/wizardingWorld';
import Pokemon from './Pages/Pokemon/Pokemon';
import ShoppingPage from './Pages/ShoppingPage/shoppingPage';
import ExtendedDetail from './Components/ExtendedCard/ExtendedCard';


//Context
import { AppContext } from './data';

function App() {
  const [cartItems, setItemsCart] = useState([])

  const addToCart = (funko) => {
    setItemsCart(items => {
      const index = items.findIndex(item => item.funko.id === funko.id);

      if (index < 0) {
        return [
          ...items,
          {
            funko,
            quantity: 1
          }
        ]
      } else {
        items[index].quantity += 1;
        return [...items];
      }
    })
  }

  const removeItem = (funko) => {
    setItemsCart(items => {
      const clean =  items.filter(item => item.funko.id !== funko.id)
      return clean
    })
  }

  const emptyCart = () => {
    setItemsCart ([])
  }


 
  const contextValue = { cartItems, addToCart, removeItem, emptyCart, setItemsCart };

  return (
    <>
      <Router>
        <AppContext.Provider value={contextValue}>
          <div>
            <NavBar cartItems={cartItems} />
          </div>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/catalog" element={<Catalog />}/>
            <Route path="/WizardingWorld" element={<WizardingWorld/>}/>
            <Route path="/Pokemon" element={<Pokemon/>}/>
            <Route path="/categories/:franchise" element={<Categories/>}/>
            <Route path="/detailpage/:id" element={<DetailPage/>}/>
            <Route path="/ShoppingPage" element={<ShoppingPage />}/>
          </Routes>
        </AppContext.Provider>
      </Router>
    </>
  )
}

export default App
