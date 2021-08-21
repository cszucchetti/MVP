import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404View from '../views/Error404View';
import HomeView from '../views/HomeView';



function Routes(props) {
    return (
        <Switch>
            {/* Home: Use 'exact' or else this route will match EVERYTHING */}
            <Route path="/" exact>
                <HomeView />
            </Route>

    
            {/* None of the routes matched: Error 404! */}
            <Error404View />
        </Switch>
    );
}

export default Routes;