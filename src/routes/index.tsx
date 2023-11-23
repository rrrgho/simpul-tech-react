import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./route";
import { IRoutes } from "./route.type";
import Auth from "../pages/auth";
import ProtectedRoute from "./protectedRoute";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />
        {routes.map((route: IRoutes, i: number) => (
          <Fragment key={i}>
            <Route
              path={route.path}
              element={<ProtectedRoute>{route.component}</ProtectedRoute>}
            />
          </Fragment>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
