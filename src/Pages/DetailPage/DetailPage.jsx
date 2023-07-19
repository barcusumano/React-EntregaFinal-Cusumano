import {useState, useEffect} from 'react'
//import axios from "axios";
import './detailpage.css'

//Components
import ExtendedDetail from '../../Components/ExtendedCard/ExtendedCard';

//useParams
import { useParams } from 'react-router-dom';

//Firebase

import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs , where , documentId } from "firebase/firestore";

const DetailPage = () => {

  const {id} = useParams();
  const [funko , setFunko] = useState ([]);

  useEffect(() => {
    const getFunkos = async () => {
      const q = query (collection(db , "funkoData"), where ( documentId(), "==" , id));
      
      const docs = [];
      const querySnapshot = await getDocs (q);
      querySnapshot.forEach((doc) => {
        docs.push ({ ...doc.data(), id: doc.id});
      });
      console.log(docs);
      setFunko(docs);
    }
    getFunkos ();
    
  }, [id]);

  return (
    <>
      <div className='cardlist'>
        {funko.map((funko) => {
          return (
            <div className='carditem'  key={funko.id}> 
              <ExtendedDetail funko={funko}/>
            </div>
          )
        })}
    </div>
    </>
  )
}

export default DetailPage