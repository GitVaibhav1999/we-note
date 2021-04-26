import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Authentication from "./Authentication/Authentication";
import Dashboard from "./Dasboard/Dashboard";
import { useAuth } from "./Authentication/AuthContext";

const AppRouter = () => {
  const { currentUser } = useAuth();

  console.log(currentUser);

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
