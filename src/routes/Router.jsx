import React from "react";
import { useRoutes } from "react-router-dom";
import { NotFound, Home } from "pages";
import { PATHNAMES } from "constants/routes";

const ROUTES = [
  {
    element: <NotFound />,
    path: PATHNAMES.NOT_FOUND,
  },
  {
    element: <Home />,
    path: PATHNAMES.HOME,
  },
];

const AppRoutes = () => useRoutes(ROUTES);

export default AppRoutes;
