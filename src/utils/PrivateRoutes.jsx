import Cookies from "js-cookie";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoutes = () => {
  const user = Cookies.get("bigbank_fx-api_server");
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
