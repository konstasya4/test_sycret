import { Route, Routes } from "react-router-dom";
import { routesPath } from ".";

const useRoutes = () => {
  return (
    <Routes>
      {routesPath.map((route) => (
        <Route
          exact={route.exact}
          path={route.path}
          element={route.element}
          key={route.path}
        />
      ))}
    </Routes>
  );
};
export default useRoutes;
