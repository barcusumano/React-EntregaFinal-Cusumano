import { useEffect, useState } from 'react'

//Firebase

import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs , where , documentId } from "firebase/firestore";

//useParams
import { Link, useParams } from 'react-router-dom';

import './categories.css'
import CardDetail from '../../Components/CardDetail/CardDetail';

const Categories = () => {
  
  const {franchise} = useParams();
  const [funko , setFunko] = useState ([]);

  useEffect(() => {
    const getFunkos = async () => {
      const q = query (collection(db , "funkoData"), where ( "franchise", "==" , franchise));
      
      const docs = [];
      const querySnapshot = await getDocs (q);
      //console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        docs.push ({ ...doc.data(), id: doc.id});
      });
      console.log(docs);
      setFunko(docs);
    }
    getFunkos ();
    
  }, [franchise]);

  
  
   return (
    <>
      <div className='cardlist'>
          {funko.map((funko) => {
            return (
                <div className='carditem'  key={funko.id}>
                  <Link to={`/detailpage/${funko.id}`}>
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