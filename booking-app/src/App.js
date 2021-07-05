import "./App.css";
import Request from "./containers/Request/Request";
import Service from "./containers/Service/Service";
import Payment from "./containers/Payment/Payment";

import React from "react";
import Layout from "./components/UI/Layout/Layout";
import { withRouter, Route, Switch } from "react-router-dom";
function App() {
  let routes = (
    <Switch>
      <Route path="/service" component={Service} />
      <Route path="/payment" component={Payment} />
      <Route path="/" component={Request} />
    </Switch>
  );
  return (
    <div className="App">
      <header className="App-header">
        <Layout>{routes}</Layout>
      </header>
    </div>
  );
}

export default withRouter(App);
