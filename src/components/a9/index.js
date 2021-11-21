import '../../vendors/bootstrap/css/bootstrap.css';
import '../../vendors/bootstrap/bootstrap.min.css';
import '../../vendors/fontawesome/css/all.min.css';
import './Build/ExploreScreen/explore.css'
import {BrowserRouter, Route} from "react-router-dom";
import Practice from "./Practice";
import Build from "./Build";

function A9() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path={["/", "/a9", "/a9/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a9/twitter">
                    <Build/>
                </Route>
            </div>
        </BrowserRouter>
    );
}


export default A9;
