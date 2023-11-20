import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import useAuth from "../hook/useAuth";

const AdminRouter = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRouter;
