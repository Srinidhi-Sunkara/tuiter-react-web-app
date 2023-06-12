// import React from "react";
import { useEffect } from "react";

import TuitItem from "./tuitItem";
import {useDispatch,useSelector} from "react-redux";

import { findTuitsThunk } from "../services/tuits-thunks";
const TuitList=()=>{
    const {tuits,loading} = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(findTuitsThunk())
      // eslint-disable-next-line 
    }, [])
   
 return(
   <ul className="list-group">
    { loading &&
       <li className="list-group-item">
         Loading...
       </li>
     }

     {
       tuits.map(tuit =>
         <TuitItem
           tuit={tuit}
         />
       )
     }
   </ul>
 );
};

export default TuitList;