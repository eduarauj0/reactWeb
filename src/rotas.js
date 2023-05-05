import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./home";

const Rotas = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
       </BrowserRouter>
   )
}

export default Rotas;