import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/common/Layout";
import routes from "./routes";
import Login from "views/Login";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: routes,
  },
  {
    index: true,
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return <RouterProvider router={routers} />;
}

export default App;
