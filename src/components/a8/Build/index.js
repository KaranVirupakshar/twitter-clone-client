import React from "react";
import {Link, Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "../../a8/Build/HomeScreen/index";
import who from "../../../reducers/who";
import tweets from "../../../reducers/tweetsN";
import profile from "../../../reducers/profileN";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import EditProfile from "./ProfileScreen/EditProfileScreen";

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>


        <div>
            <Route path={["/", "/a8/twitter/home"]}
                   exact={true} component={HomeScreen}/>
            <Route path="/a8/twitter/explore"
                   exact={true} component={ExploreScreen}/>
            <Route path="/a8/twitter/profile"
                   exact={true} component={ProfileScreen}/>
            <Route path="/a8/twitter/profile/editProfile"
                   exact={true} component={EditProfile}/>

        </div>
        </Provider>

    );
};

export default Build;