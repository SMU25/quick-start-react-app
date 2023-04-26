import React, { FC } from "react";
import { useRoutes } from "react-router-dom";
import { NotFound, Home } from "src/pages";
import { PATHNAMES } from "src/constants/routes";

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

const AppRoutes: FC = () => useRoutes(ROUTES);

export default AppRoutes;
