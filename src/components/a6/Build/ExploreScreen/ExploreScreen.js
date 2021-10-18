/* global $ */
import React from "react";

import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen = () => {
    return (
        <div class="row mt-3">
        <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 d-none d-sm-block">
            <NavigationSidebar active = "Explore"/>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-9 col-sm-10">
            <ExploreComponent/>
        </div>
        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-3 d-none d-lg-block">
            <WhoToFollowList/>
        </div>
        </div>
    );
};

export default ExploreScreen;
