import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import AppRouter from "./approuter/AppRouter";

const App = () => {
  return <BrowserRouter>
  <AppRouter/>
  </BrowserRouter>
  
};

export default App;
