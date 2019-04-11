import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage';
import Cartpage from './pages/cartpage';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/cart' component={Cartpage} />
    </Switch>
)

export default Router;