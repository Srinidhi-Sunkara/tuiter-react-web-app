import React from "react";
import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import ExploreScreen from "./explore-screen";



function Tuiter() {
    return(
      //  <div>
      //     <Nav/>
      //     <h1>Tuiter</h1>
      //  </div>
      // <div>
      //    <Nav />
      //    <div className="row">
      //       <div className="col-2">
      //          <NavigationSidebar />
      //       </div>
      //       <div className="col-7">
      //          <Routes>
      //          <Route path="/home" element={<HomeScreen/>} />
      //          <Route path="/explore" element={<ExploreScreen/>} />
      //          <Route path="/bookmarks" element={<BookmarksScreen/>}/>
      //          <Route path="/profile" element={<ProfileScreen/>}/>
      //          </Routes>
      //       </div>
      //       <div className="col-3">
      //          <h1>Who to follow</h1>
      //       </div>
      //    </div>
      // </div>

      <div className="row">
         <div className="col-2">
            <NavigationSidebar />
         </div>
         <div className="col-7">
            <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen/>} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
         </div>
         <div className="col-3">
         
         <WhoToFollowList/>
         </div>
         </div>


    );
 }
 export default Tuiter