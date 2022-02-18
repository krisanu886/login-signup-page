import "./App.css";
import Login from "./component/login/login";
import Signup from "./component/signup/signup";
import Homepage from "./component/homepage/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/"><Homepage /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/signup"><Signup /></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
