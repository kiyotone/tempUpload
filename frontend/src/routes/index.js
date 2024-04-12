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
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children, protectedRoute = false }) => {
  // Check if the current route is login or signup

  return (
    <div>
      {/* Render navigation only if the route is not login or signup */}
      {!protectedRoute && <Header />}
      {/* Render children (page content) */}
      {children}
      {/* Render footer only if the route is not login or signup */}
      {!protectedRoute && <Footer />}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <Layout>
            <Home />
          </Layout>
        ),
      },
      {
        path: "login",
        element: (
          <Layout protectedRoute={true}>
            <Login />
          </Layout>
        ),
      },
      {
        path: "forgot-password",
        element: <ForgotPassowrd />,
      },
      {
        path: "sign-up",
        element: (
          <Layout protectedRoute={true}>
            <SignUp />
          </Layout>
        ),
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
        ],
      },
    ],
  },
]);

export default router;
