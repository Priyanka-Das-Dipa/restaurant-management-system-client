import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaJediOrder,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import useCart from "../hook/useCart";
import useAdmin from "../hook/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

    const [isAdmin] = useAdmin();
  // const isAdmin = true;

  return (
    <div className="flex gap-3">
      <div className="w-64 min-h-screen bg-orange-300">
        <ul className="menu p-4">
          {/* dashboard side bar */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <FaList></FaList>
                  My Booking
                </NavLink>
              </li>
            </>
          )}
          {/* shared navLinks for user  the dashboard */}
          <div className="divider text-white"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <LuMenu></LuMenu>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaShoppingBag></FaShoppingBag>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaJediOrder></FaJediOrder>
              Order
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
