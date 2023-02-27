import { useMemo } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PublicRoutes = ({redirectTo}) => {
  console.log('redirectTo = ', redirectTo)
  const auth = true; // this is just for now, it should be destructured from auth context
  const Element = useMemo(() => !auth ? <Outlet /> : <Navigate to={redirectTo}/>,[auth,redirectTo]);
  return Element;
}

export default PublicRoutes;