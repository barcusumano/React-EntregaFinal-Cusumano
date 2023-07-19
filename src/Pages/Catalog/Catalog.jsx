import React from 'react'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'
import './catalog.css';

const Catalog = () => {
  return (
    <>
      <h1 className='title'>Catalog</h1>
      <div>
      <ItemListContainer />
      </div>
    </>
  )
}

export default Catalog