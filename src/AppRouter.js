import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authentication from "./Authentication/Authentication";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <route path="/">
          <Authentication />
        </route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
