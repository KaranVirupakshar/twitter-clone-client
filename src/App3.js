import './vendors/bootstrap/css/bootstrap.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './components/a6/Build/ExploreScreen/explore.css'
import {BrowserRouter, Link, Route} from "react-router-dom";
import Practice from "./components/a8/Practice";
import Build from "./components/a8/Build";
import React from "react";

function App3() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
                    <Practice/>
                </Route>
            </div>
        </BrowserRouter>
    );
}


export default App3;
