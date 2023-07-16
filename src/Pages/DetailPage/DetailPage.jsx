import {useState, useEffect} from 'react'
//import axios from "axios";
import './detailpage.css'

//Components
import CardDetail from '../../Components/CardDetail/CardDetail';

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
    
  }, [id]);

  return (
    <>
      <div className='cardlist'>
        {funko.map((funko) => {
          return (
            <div className='carditem'  key={funko.id}> 
              <CardDetail funko={funko}/>
            </div>
          )
        })}
    </div>
    </>
  )
}

export default DetailPage