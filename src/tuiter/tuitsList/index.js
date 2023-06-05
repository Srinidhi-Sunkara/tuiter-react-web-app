// import React from "react";
import TuitItem from "./tuitItem";
import {useSelector} from "react-redux";


const TuitList=()=>{
    const { tuits } = useSelector(state => state.tuits)
 return(
   <ul className="list-group">
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