import React from 'react';

export const AppContext = React.createContext({
    cartItems: [],
    addToCart: console.log,
})