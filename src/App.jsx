
import Home from "./components/Home/Home";
import OrderPizza from "./components/Order/OrderPizza";
import Success from "./components/Success";
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/success" ><Success /></Route>
        <Route path="/order" ><OrderPizza /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
