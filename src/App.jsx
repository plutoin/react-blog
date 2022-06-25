import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import PostView from "./pages/PostView/PostView";

import "./styles/reset.css";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/post-view" exact component={PostView} />
    </BrowserRouter>
  );
}

export default App;
