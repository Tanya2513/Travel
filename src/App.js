import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ProfilePage from "./ProfilePage";
import CountryPage from "./CountryPage";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/country">
                    <CountryPage/>
                </Route>
                <Route path="/">
                    <ProfilePage/>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
