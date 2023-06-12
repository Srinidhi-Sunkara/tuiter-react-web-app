// import React from "react";
// import tuitsArray from './tuits.json';
import {useSelector} from "react-redux";
import TuitSummaryItem from "./tuit-summary-item";

const TuitSummaryList = () => {
  let { tuits } = useSelector(state => state.tuits)
  // alert(tuits);
  // tuits=[{"_id":"123","topic":"Space","username":"SpaceX","handle":"@spacex","time":"2h","image":"spacex.png","title":"SpaceX's Mission","liked":true,"likes":2345,"replies":123,"retuits":432,"tuit":"You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"},{"_id":"234","topic":"Traffic","username":"The Boring Company","handle":"@boringcompany","time":"2h","image":"boring2.jpg","liked":true,"likes":2345,"replies":321,"retuits":432,"title":"The Boring Company fixing traffic","tuit":"The Boring Company (TBC) is an American infrastructure and tunnel construction services company founded by Elon Musk. Its ongoing and proposed projects are designed for intra-city ('loop') transit systems."},{"_id":"345","topic":"Brain Injuries","username":"Neurolink","handle":"@neurolink","time":"3h","image":"neurolink.jpg","title":"Neurolink fixes paralisis and blindness","tuit":"Neurolink is an American company founded by Elon Musk that specializes in brain to computer integration. The first application will be to cure spinal cord injuries so that paraplegics can walk again. Other applications include curing blindness and mental disorders.","liked":true,"likes":3456,"replies":345,"retuits":654}];


 return(
   <ul className="list-group">
     {
       tuits.map(tuit =>
         <TuitSummaryItem
           key={tuit._id} tuit={tuit}/> )
     }
   </ul>
 );
};
export default TuitSummaryList;