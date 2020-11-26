import React from 'react';
import { Route, Switch } from "react-router-dom";

import NavBarComponent from "./components/navbar";
import HomeYarisComponent from "./components/home";
import HomeRevoComponent from "./components/home_revo";

function App() {
    return (
        <div className="App">
            <NavBarComponent /> 
            <Switch>
                <Route path="/" exact component={HomeYarisComponent} />
                <Route path="/toyota-yaris" exact component={HomeYarisComponent} />
                <Route path="/toyota-revo" exact component={HomeRevoComponent} />
            </Switch>

        </div>
    );
}

export default App;