import logo from "./logo.svg";
import "./App.css";
import { Home } from "../src/components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { GuessNumber } from "./components/Games/GuessNumber/GuessNumber";
import { DeleteChar } from "./components/Games/DeleteChar/DeleteChar";
function App() {
  return (
    <div className="App">
      <Switch>
        {/* <div>gfdgfdgdf</div> */}
        <Route path="/delete-char" component={DeleteChar} />
        <Route path="/guess-number" component={GuessNumber} />
        <Route exact path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
