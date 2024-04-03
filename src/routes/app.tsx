import React from "react";
import Login from "views/Login/";
import Home from "views/Home/";

import { RouteObject } from "react-router-dom";
import Clients from "views/Clients";
import EditClient from "views/Clients/EditClient";
import ClientOverview from "views/Clients/ClientOverview";
import Jobs from "views/Jobs";
import EditJob from "views/Jobs/EditJob";
import JobOverview from "views/Jobs/JobOverview";
import Sites from "views/Clients/Sites";
import EditSite from "views/Clients/Sites/EditSite";
import SiteOverviewDetail from "views/Clients/Sites/SiteOverviewDetail";
import SiteOVerview from "views/Clients/Sites/SiteOverview";
import Contacts from "views/Clients/Contacts";
import EditContacts from "views/Clients/Contacts/EditContacts";

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
  {
    path: "/client-list/overview",
    element: <ClientOverview />,
  },
  {
    path: "/client-list/sites",
    element: <Sites />,
  },
  {
    path: "/client-list/sites/edit/:id",
    element: <EditSite />,
  },
  {
    path: "/client-list/sites/overview/:id",
    element: <SiteOVerview />,
  },
  {
    path: "/client-list/sites/overview/:id/details",
    element: <SiteOverviewDetail />,
  },
  {
    path: "/client-list/contacts",
    element: <Contacts />,
  },
  {
    path: "/client-list/contacts/edit/1",
    element: <EditContacts />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/jobs/edit/:id",
    element: <EditJob />,
  },
  {
    path: "/jobs/overview/:id",
    element: <JobOverview />,
  },
];
export default appRoutes;
