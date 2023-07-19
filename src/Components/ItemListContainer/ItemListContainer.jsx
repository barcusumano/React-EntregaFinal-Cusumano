import React, {useState, useEffect, useContext} from 'react';
import './itemlistcontainer.css';
import CardDetail from '../CardDetail/CardDetail';

//Firebase

import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs , where } from "firebase/firestore";

// React Router Dom

import { Link } from 'react-router-dom';


// console.log(import.meta.env.VITE_APP_BASE_URL);

const ItemListContainer = () => {
  const [funkos, setFunkos] = useState ([]);

  useEffect(() => {
    const getFunkos = async () => {
      const q = query (collection(db , "funkoData"),);
      const docs = [];
      const querySnapshot = await getDocs (q);
      //console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        docs.push ({ ...doc.data(), id: doc.id});
      });
      // console.log(docs);
      setFunkos(docs);
    }
    getFunkos ();
    
  }, []);
  
  return (
    <div className='cardlist'>
        {funkos.map((funko) => {
          return (
            <div className='carditem'  key={funko.id}>
              <Link className='nodeco' to={`/detailpage/${funko.id}`}>
                <CardDetail funko={funko} />
              </Link>
            </div>
          )
        })}
    </div>
  )
}

export default ItemListContainer