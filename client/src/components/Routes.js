import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404View from '../views/Error404View';
import HomeView from '../views/HomeView';
import FormsView from '../views/FormsView';
import HistoryView from '../views/HistoryView';


function Routes(props) {
    return (
        <Switch>
            {/* Home: Use 'exact' or else this route will match EVERYTHING */}
            <Route path="/" exact>
                <HomeView />
            </Route>
            
            
            <Route path="/forms" exact>
                <FormsView exerciseTypes={props.exerciseTypes} addExerciseCb={props.addExerciseCb} addWorkoutCb={props.addWorkoutCb} />
            </Route>
            
            
            <Route path="/history" exact>
                <HistoryView exercises={props.exercises} workouts={props.workouts}/>
            </Route>

            {/* None of the routes matched: Error 404! */}
            <Error404View />
        </Switch>
    );
}

export default Routes;