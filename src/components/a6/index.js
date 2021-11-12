import '../../vendors/bootstrap/css/bootstrap.css';
import '../../vendors/bootstrap/bootstrap.min.css';
import '../../vendors/fontawesome/css/all.min.css';
import './Build/ExploreScreen/explore.css'
import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from "./HelloWorld";
import Practice from "./Practice";
import Build from "./Build";
import ExploreScreen from "./Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./Build/HomeScreen/HomeScreen";


function A6() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a6/build" exact={true}>
                    <Build/>
                </Route>
                <Route path="/a6/twitter/explore" exact={true}>
                    <ExploreScreen/>
                </Route>

                <Route path="/a6/twitter/home" exact={true}>
                    <HomeScreen/>
                </Route>

            </div>
        </BrowserRouter>
    );
}


export default A6;