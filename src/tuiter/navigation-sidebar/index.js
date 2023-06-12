// import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faEllipsisH, faSignInAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";


const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [active] = pathname.split("/");
 const { currentUser } = useSelector((state) => state.user);
//  const links = ["home",     "explore",   "notifications", "messages", "bookmarks", "lists", "profile",  "more"];
 return (
   <div className="list-group">
          <Link to={`/tuiter/home`} className={`list-group-item text-capitalize ${active === "home" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faHome} style={{"padding":"2px", "margin-right":"2px"}}/> home
         </Link>

         <Link to={`/tuiter/explore`} className={`list-group-item text-capitalize ${active === "explore" ? "active" : ""}`} >
            <FontAwesomeIcon icon={faHashtag} style={{"padding":"2px", "margin-right":"2px"}}/> explore
         </Link>
         <Link to={`/tuiter/notifications`} className={`list-group-item text-capitalize ${active === "notifications" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faBell} style={{"padding":"2px", "margin-right":"2px"}}/> notifications
         </Link>
         <Link to={`/tuiter/messages`} className={`list-group-item text-capitalize ${active === "messages" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faEnvelope} style={{"padding":"2px", "margin-right":"2px"}}/> messages
         </Link>
         <Link to={`/tuiter/bookmarks`} className={`list-group-item text-capitalize ${active === "bookmarks" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faBookmark} style={{"padding":"2px", "margin-right":"2px"}}/> bookmarks
         </Link>
         <Link to={`/tuiter/lists`} className={`list-group-item text-capitalize ${active === "lists" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faList} style={{"padding":"2px", "margin-right":"2px"}}/> lists
         </Link>
        {currentUser && <Link to={`/tuiter/profile`} className={`list-group-item text-capitalize ${active === "profile" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faUser} style={{"padding":"2px", "margin-right":"2px"}}/> profile
         </Link>}
         <Link to={`/tuiter/more`} className={`list-group-item text-capitalize ${active === "more" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faEllipsisH} style={{"padding":"2px", "margin-right":"2px"}}/> more
         </Link>

     {/* {links.map((link) => 
         <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
            <FontAwesomeIcon icon={faHome} style={{"padding":"2px", "margin-right":"2px"}}/> {link}
         </Link>
     )} */}


   {!currentUser &&  <Link to={`/tuiter/login`} className={`list-group-item text-capitalize ${active === "more" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faUserPlus} style={{"padding":"2px", "margin-right":"2px"}}/> login
         </Link>}
         {!currentUser &&  <Link to={`/tuiter/register`} className={`list-group-item text-capitalize ${active === "more" ? "active" : ""}`}>
            <FontAwesomeIcon icon={faSignInAlt} style={{"padding":"2px", "margin-right":"2px"}}/> Register
         </Link>}
     {/* {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
     {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>} */}


     {/* { currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>} */}

   </div>
 );
};
export default NavigationSidebar;