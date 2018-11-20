import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error from './Error';
import Home from './Home';
const Routes = props =>{
    return <Switch>
    {/*Home Route*/}
    <Route exact path="/" component={Home} />
    {/*Error handler route*/}
    <Route component={Error} /> 
  </Switch>
}

export default Routes;