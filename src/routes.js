import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    // stating that we will access the route via browser
    <BrowserRouter>
        {/* a single route will be called at the same time */} 
        <Switch>
            {/* defining the first route */}
            <Route exact path="/" component={ Main } />
            <Route path="/products/:id" component={ Product } />
        </Switch>
    </BrowserRouter>
);

export default Routes;