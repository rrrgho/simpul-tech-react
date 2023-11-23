import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { IAuthenticated } from "../Types/initial.type";
import { IRootState } from "../Store";

interface IProtectedRoute {
  children: any;
}
const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const AUTHENTICATED: IAuthenticated = useSelector(
    (state: IRootState) => state.InitialReducer
  );
  if (!AUTHENTICATED.is_authenticate) {
    console.log(AUTHENTICATED);
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedRoute;
