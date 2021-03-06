import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Route component={Home} path="/" />
  </BrowserRouter>
);

export default Routes;
