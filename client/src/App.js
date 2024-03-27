import { Route, Routes } from "react-router-dom";
import "./css/App.css";

// Components
import TopBar from "./component/publicView/Topbar";
import Footer from "./component/publicView/Footer";
import NoTopbar from "./component/publicView/NoTopbar";
// General Pages
import PageNotFound from "./pages/404";
import Home from "./pages";
import Checkout from "./pages/checkout";
import PasswordReset from "./pages/PasswordReset";
// Registered User Pages
import MyAccount from "./pages/registeredPages/myaccount";
import ChangePw from "./pages/registeredPages/changepw";
import OrderHistory from "./pages/registeredPages/OrderHistory";
import OrderDetail from "./pages/registeredPages/OrderDetail";
// Public Pages
import ShoppingCart from "./pages/publicPages/ShoppingCart";
//Staff pages
import Dashboard from "./pages/Staff/Dashboard";
import OrdersMaintenancePage from "./pages/Staff/OrdersMaintenancePage";
import OrderDetailPage from "./pages/Staff/OrderDetailPage";
import ProductListPage from "./pages/publicPages/ProductListPage";
import ProductDetails from "./pages/publicPages/productDetails";
import AboutUs from "./pages/publicPages/about";
import ContactUs from "./pages/publicPages/contactUs";
import FAQ from "./pages/publicPages/FAQ";
//Admin pages
import AddNewUser from "./pages/admin/AddNewUser";
import StaffReportsPage from "./pages/admin/StaffReportsPage";
import UpdateUser from "./pages/admin/UpdateUser";
import UsersAccounts from "./pages/admin/UsersAccounts";
import ProductsMaintenancePage from "./pages/admin/ProductsMaintenancePage";
import ProductDetailPage from "./pages/admin/ProductDetailPage";
import CategoryMaintenancePage from "./pages/admin/CategoryMaintenancePage";

function App() {
  return (
    <div>
      <Routes>
        {/*Pages that show topbar footer*/}
        <Route element={<TopBar />}>
          <Route element={<Footer />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/myaccount/changepw" element={<ChangePw />} />
            <Route path="/myaccount/orderhistory" element={<OrderHistory />} />
            <Route
              exact
              path="/myaccount/orderhistory/:orderId"
              element={<OrderDetail />}
            />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/resetpassword" element={<PasswordReset />} />
            <Route exact path="/productlist" element={<ProductListPage />} />
            <Route
              exact
              path="/productlist/:productId"
              element={<ProductDetails />}
            />
          </Route>
        </Route>

        {/*Pages that dont show public topbar*/}
        <Route element={<NoTopbar />}>
          {/*Staff Pages*/}
          <Route exact path="/staff" element={<Dashboard />} />
          <Route
            exact
            path="/staff/orders"
            element={<OrdersMaintenancePage />}
          />
          <Route
            exact
            path="/staff/orders/:orderId"
            element={<OrderDetailPage />}
          />

          {/*Admin Pages*/}
          <Route path="/admin/" element={<StaffReportsPage />} />
          <Route path="/admin/add" element={<AddNewUser />} />
          <Route path="/admin/edit/:id" element={<UpdateUser />} />
          <Route path="/admin/users" element={<UsersAccounts />} />
          <Route
            path="/admin/categories"
            element={<CategoryMaintenancePage />}
          />
          <Route
            exact
            path="/admin/products"
            element={<ProductsMaintenancePage />}
          />
          <Route
            exact
            path="/admin/products/:productId"
            element={<ProductDetailPage />}
          />

          {/*Checkout Page*/}
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
