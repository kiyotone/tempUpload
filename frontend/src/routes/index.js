import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassowrd from "../pages/ForgotPassowrd";
import SignUp from "../pages/SignUp";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";
import CategoryProduct from "../pages/CategoryProduct";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import SearchProduct from "../pages/SearchProduct";
import Appointment from "../pages/Appointment";
import AllAppointments from "../pages/AllAppointments.js";
import RecoverPassword from "../pages/RecoverPassword.js";
import Khalti from "../khalti/khalti.jsx";
import Profile from "../pages/Profile.js";
import AllOrders from "../pages/AllOrders.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassowrd />,
      },
      {
        path: "recover-password",
        element: <RecoverPassword />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "product-category",
        element: <CategoryProduct />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "search",
        element: <SearchProduct />,
      },
      {
        path: "appointments",
        element: <Appointment />,
      },
      {
        path: "khalti",
        element: <Khalti />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "all-products",
            element: <AllProducts />,
          },
          {
            path: "all-appointments",
            element: <AllAppointments />,
          },
          {
            path: "all-orders",
            element: <AllOrders />,
          },
        ],
      },
    ],
  },
]);

export default router;
