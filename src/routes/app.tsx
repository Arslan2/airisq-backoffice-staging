import React from 'react';
import Login from 'views/Login/';
import Home from 'views/Home/';

import { RouteObject } from 'react-router-dom';

const appRoutes: Array<RouteObject> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];
export default appRoutes;
