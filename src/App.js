import './vendors/bootstrap/css/bootstrap.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './components/a6/Build/ExploreScreen/explore.css'
import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";


function App() {
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


export default App;
