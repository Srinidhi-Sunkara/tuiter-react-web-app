// import React from "react";
import {useDispatch} from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faComment, faRetweet, faHeart,faUpload} from '@fortawesome/free-solid-svg-icons';
import { FaTimes } from 'react-icons/fa';




const TuitItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "data:image/png;base64,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",
     "liked": false,
     "replies": 234,
     "retuits": 543,
     "likes": 3456,
     "handle": "@spacex",
     "tuit":"Looks like that Model S Plaid is breaking more than just the sound barrier! Congrats on the record-setting lap. Let's hope this accomplishment sparks some healthy competition in the EV market " 
   }
  
  }
 
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id))};
  library.add(fas);
 return(
  <li className="list-group-item">
    <div className="row">
      <div className="col-1">
    <img className="rounded-circle" height={40} width={48} src={`${tuit.image}`} alt="not found"/>
    </div>
    <div className="col">
    <FaTimes className="bi bi-x-lg float-end"  onClick={() => deleteTuitHandler(tuit._id)} />
            <b> {tuit.userName}</b>
            <span style={{ padding: '0 2px' }}> <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '15px', color:'#1DA1F2'}} /> </span>
            {tuit.handle}
            <span style={{ padding: '0 2px' }}>{String.fromCharCode(parseInt("2022", 16))} </span> {tuit.time}
            <br/>
            {tuit.tuit}
           
          <div>
            <div class="row">
              <div class="col"><FontAwesomeIcon icon={faComment}/> {tuit.replies}  </div>
              <div class="col"> <FontAwesomeIcon icon={faRetweet}/> {tuit.retuits}</div>
              <div class="col">  {tuit.liked?<FontAwesomeIcon icon={faHeart} style={{color:'red'}}/> :<FontAwesomeIcon icon={faHeart}/> }
          {tuit.likes}  </div>
          <div class="col"> <FontAwesomeIcon icon={faUpload}/></div>
       
          </div>

          </div>
      </div>
    </div>
    
  </li>
 );
};
export default TuitItem;