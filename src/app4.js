
import './vendors/bootstrap/css/bootstrap.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Link, Route} from "react-router-dom";
import A6 from "./components/a6";
import A7 from "./components/a7";

function App4() {
    return (
        <BrowserRouter>
            <div className="container">

                <Link to="/a6/practice">A6</Link> |
                <Link to="/a7/practice">A7</Link> |

                <Route path="/a6">
                    <A6/>
                </Route>
                <Route path="/a7">
                    <A7/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App4;
