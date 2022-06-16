import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";

import "./styles/reset.css";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/post-view" exact component={Post} />
    </BrowserRouter>
  );
}

export default App;
