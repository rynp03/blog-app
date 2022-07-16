import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/index";
import Blog from "./pages/Blog/index";
import { Switch } from "react-router-dom";
import Footer from "./components/common/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog/:id" component={Blog} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
