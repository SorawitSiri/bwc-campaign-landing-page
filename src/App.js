import React from 'react';
import { Route, Switch } from "react-router-dom";

import NavBarComponent from "./components/navbar";
import HomeComponent from "./components/home";
import HomeYarisComponent from "./components/home_yaris";

function App() {
    return (
        <div className="App">
            <NavBarComponent /> 
            <Switch>
                <Route path="/" exact component={HomeComponent} />
                <Route path="/toyota-yaris" exact component={HomeYarisComponent} />
                <Route path="/toyota-revo" exact component={HomeYarisComponent} />
            </Switch>

        </div>
    );
}

export default App;