import React from "react";
import Login from "views/Login/";
import Home from "views/Home/";

import { RouteObject } from "react-router-dom";
import Clients from "views/Clients";
import EditClient from "views/Clients/EditClient";

const appRoutes: Array<RouteObject> = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/client-list",
    element: <Clients />,
  },
  {
    path: "/client-list/edit/:id",
    element: <EditClient />,
  },
];
export default appRoutes;
