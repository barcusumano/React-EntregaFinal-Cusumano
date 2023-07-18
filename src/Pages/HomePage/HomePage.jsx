import React from 'react'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'
import './homepage.css'


const HomePage = () => {
  return (
    <>
    <div className='title'>HomePage</div>
    <h2 className='subtitle'>Visit our Catalog to find all our products</h2>
    <ItemListContainer/>
    </>
  )
}

export default HomePage