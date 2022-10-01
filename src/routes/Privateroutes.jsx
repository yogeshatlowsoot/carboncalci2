import { Navigate, useLocation } from "react-router";
import { useProtectioncontext } from "../context/Protectioncontext";

export function Privateroute({ children }) {
  const { codeval } = useProtectioncontext();
  const loginstatus = codeval;
  const location = useLocation();
  if (!loginstatus) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}
