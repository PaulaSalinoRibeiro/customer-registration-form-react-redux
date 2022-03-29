import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Clientes from './pages/Clientes';

class App
 extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/clientes' component={Clientes} />
          <Route path='/register' component={Register} />
        </Switch>
      </>
    );
  }
}

export default App
;

