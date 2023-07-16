import React from 'react'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'
import './catalog.css'

const Catalog = () => {
  return (
    <>
    <div className='title'>Catalog</div>
    <div>
      <ItemListContainer/>
    </div>
    </>
  )
}

export default Catalog