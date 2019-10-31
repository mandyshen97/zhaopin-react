import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Login from './containers/login/Login';
import Register from './containers/register/Register';
import MainPage from './containers/main/Main';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        {/* <Route path='/main' component={MainPage}></Route> */}
        {/* <Route path='/' component={Login}></Route> */}
        <Route component={MainPage}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
