import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/dashboard/Users";
import Products from "./pages/dashboard/Products";
import CreateProduct from "./pages/dashboard/CreateProduct";
import EditProduct from "./pages/dashboard/EditProduct";
import Login from "./pages/Login";
import SignUp from "./pages/SginUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Error from "./pages/Erorr";
import { ProtectRegistrationRoutes } from "./components/ProtectRegistrationRoutes";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";

function App() {
  function Layout() {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="productDetails" element={<ProductDetails />} />
          <Route path="*" element={<Error />} />

          <Route
            path="login"
            element={
              <ProtectRegistrationRoutes>
                <Login />
              </ProtectRegistrationRoutes>
            }
          />
          <Route
            path="signup"
            element={
              <ProtectRegistrationRoutes>
                <SignUp />
              </ProtectRegistrationRoutes>
            }
          />
        </Route>

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allow={["admin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="addproducts" element={<CreateProduct />} />
          <Route path="editproduct/:productID" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
