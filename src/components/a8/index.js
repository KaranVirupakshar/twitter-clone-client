import './vendors/bootstrap/css/bootstrap.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './components/a6/Build/ExploreScreen/explore.css'
import {BrowserRouter, Route} from "react-router-dom";
import Practice from "./Practice";
import Build from "./Build";

function A7() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a7/twitter">
                    <Build/>
                </Route>
            </div>
        </BrowserRouter>
    );
}


export default A7;
