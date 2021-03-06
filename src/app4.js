
import './vendors/bootstrap/css/bootstrap.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import A6 from "./components/a6";
import A7 from "./components/a7";
import A8 from "./components/a8";
import A9 from "./components/a9";


function App4() {
    return (
        <BrowserRouter>
            <div className="container">

                <Link to="/a6/practice">A6</Link> |
                <Link to="/a7/practice">A7</Link> |
                <Link to="/a8/practice">A8</Link> |
                <Link to="/a9/practice">A9</Link> |



                <Route path="/a6">
                    <A6/>
                </Route>
                <Route path="/a7">
                    <A7/>
                </Route>
                <Route path="/a8">
                    <A8/>
                </Route>
                <Route path="/a9">
                    <A9/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App4;
