import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { FaDollarSign, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h1>Hi, Welcome </h1>
      <span>{user?.displayName ? user?.displayName : "Back"}</span>
      <div className="mt-10">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaDollarSign className="text-5xl"></FaDollarSign>
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value">${stats.revenue}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-5xl"></FaUsers>
            </div>
            <div className="stat-title"> Users</div>
            <div className="stat-value">{stats.users}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
             
            </div>
            <div className="stat-title"> Menu Items</div>
            <div className="stat-value">{stats.menuItems}</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              
            </div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">{stats.orders}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
