import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Search } from "./pages/Search";
import { Navbar } from "./components/Navbar";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/apisearch">
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
