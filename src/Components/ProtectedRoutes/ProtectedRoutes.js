
import { useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({redirectTo}) => {
  const auth = true; // this is just for now, it should be destructured from auth context
  const Element = useMemo(() => !!auth ? <Outlet /> : <Navigate to={redirectTo}/>,[auth,redirectTo]);
  return Element;
}

export default ProtectedRoutes