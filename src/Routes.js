import { Route, Switch, BrowserRouter } from "react-router-dom";
import React from "react";
import Support from "./Pages/support/Support";
import Home from "./Pages/home/Home.page";
import About from "./Pages/about/About";
import Books from "./Pages/books/Books";
import News from "./Pages/news/News";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/books" component={Books} />
          <Route path="/news" component={News} />
          <Route path="/support" component={Support} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Routes;
