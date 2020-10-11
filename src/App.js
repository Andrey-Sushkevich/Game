import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Welcome from './components/Welcome';
import Game from './components/Game';
import Records from './components/Records';
import Profile from './components/Profile';
import Congratulations from './components/Congratulations';
import NotFoundPage from './components/NotFoundPage';

export default function App() { 
  return (
    <div className="App">
       <Switch>

       <Route path='/welcome' component={Welcome}/>
       <Route path='/game' component={Game}/>
       <Route path='/records' component={Records}/>
       <Route path='/profile' component={Profile}/>
       <Route path='/congratulations' component={Congratulations}/>
       <Route exact path='/'>
       <Redirect to='/welcome'/>
       <Route component={NotFoundPage} />
       </Route>
       </Switch>
</div>
);
}
