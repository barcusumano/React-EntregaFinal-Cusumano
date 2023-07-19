import React from 'react'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer'
import './homepage.css';


const HomePage = () => {
  return (
    <>
      <div>
          <div className='header'>
            <h1 className='title3'>HomePage</h1>
          </div>
          <div>
            
            <ItemListContainer/>
          </div>
      </div>
    </>
  )
}

export default HomePage