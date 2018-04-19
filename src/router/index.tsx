
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import userRoute from "./UserRouter";

const routes = [
    ...userRoute
];

export default (
  <Router>
    <div>
      {
        routes.map((r,i) => <Route key={i} {...r} />)
      }
    </div>
  </Router>
)