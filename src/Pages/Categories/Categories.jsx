import { useEffect, useState } from 'react'
import './categories.css';

//Firebase

import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs , where } from "firebase/firestore";

//useParams
import { Link, useParams } from 'react-router-dom';

import './categories.css';
import CardDetail from '../../Components/CardDetail/CardDetail';

const Categories = () => {
  
  const {franchise} = useParams();
  const [funko , setFunko] = useState ([]);

  useEffect(() => {
    const getFunkos = async () => {
      const q = query (collection(db , "funkoData"), where ( "franchise", "==" , franchise));
      
      const docs = [];
      const querySnapshot = await getDocs (q);
      querySnapshot.forEach((doc) => {

        docs.push ({ ...doc.data(), id: doc.id});
      });
      console.log(docs);
      setFunko(docs);
    }
    getFunkos ();
    
  }, [franchise]);
  
   return (
    <>
      <h1 className='title2'>{franchise}</h1>
        <div className='cardlist'>
          {funko.map((funko) => {
            return (
                <div className='carditem'  key={funko.id}>
                  <Link className='nodeco' to={`/detailpage/${funko.id}`}>
                  <CardDetail funko={funko}/>
                  </Link>
                </div>
            )
          })}
      </div>
    </>  
  )
}

export default Categories