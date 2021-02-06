import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Cv from "./Cv";
import About from "./About";
import Contact from "./Contact";
const Router = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/home" component={App}/>
            <Route path="/user" component={About}/>
            <Route path="/code" component={Cv}/>
            <Route path="/envelope" component={Contact}/>
            <Route path ="/contact" component={Contact}/>
        </Switch>
    </BrowserRouter>
)

export default Router;