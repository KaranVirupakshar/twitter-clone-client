import React from "react";
import {Link, Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "../../a7/Build/HomeScreen/index";
import who from "../../../reducers/who";
import tweets from "../../../reducers/tweets";
import profile from "../../../reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>

        <div>
            <Route path={["/", "/a7/twitter/home"]}
                   exact={true} component={HomeScreen}/>
            <Route path="/a7/twitter/explore"
                   exact={true} component={ExploreScreen}/>
        </div>
        </Provider>

    );
};

export default Build;