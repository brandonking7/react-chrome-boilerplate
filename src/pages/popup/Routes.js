import React from "react";

import {
  BrowserRouter as Router,
  Route,
  browserHistory as history
} from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";

function Routes() {
  return (
    <Router history={history}>
      <Route exact path="/pages/popup.html" component={HomeContainer} />
      {/*<Route path="/pages/settings" component={Settings} />*/}
    </Router>
  );
}

export default Routes;
