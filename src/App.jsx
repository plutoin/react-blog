import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import PostView from "./pages/PostView/PostView";

import "./styles/reset.css";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Main} />
      <Route path="/postView" exact component={PostView} />
    </BrowserRouter>
  );
}

export default App;
