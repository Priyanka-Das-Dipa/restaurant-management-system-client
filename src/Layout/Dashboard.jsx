import {
  FaAd,
  FaCalendar,
  FaFacebookMessenger,
  FaHome,
  FaJediOrder,
  FaList,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

const Dashboard = () => {
  return (
    <div className="flex gap-3">
      <div className="w-64 min-h-screen bg-orange-300">
        <ul className="menu p-4">
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
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaList></FaList>
              My Booking
            </NavLink>
          </li>
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
              <FaFacebookMessenger></FaFacebookMessenger>
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
