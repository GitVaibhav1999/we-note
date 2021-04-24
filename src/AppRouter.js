import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authentication from "./Authentication/Authentication";
import Dashboard from "./Dasboard/Dashboard";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <route path="/signUp">
          <Authentication />
        </route>
        <route path="/">
          <Dashboard />
        </route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
