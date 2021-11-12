import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";
import EditProfile from "./EditProfile";
import './profile.css'
import Profile from "./index";

const EditProfileScreen = () => {
    return (
        <div className="row mt-3">
            <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 d-none d-sm-block">
                <NavigationSidebar active = "Profile"/>
            </div>
            <div className=" col-xxl-6 col-xl-6 col-lg-7 col-md-9 col-sm-10">
                <EditProfile/><PostList/>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-3 d-none d-lg-block">
                <PostSummaryList title = "What's happening"/>
            </div>
        </div>
    )
}

export default EditProfileScreen;