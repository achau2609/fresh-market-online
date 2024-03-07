import { Route, Routes, useLocation  } from 'react-router-dom';
import "./css/App.css"

// Components
import TopBar from './component/publicView/Topbar';
import Footer from './component/publicView/Footer';
import NoTopbar from './component/publicView/NoTopbar';
// General Pages
import PageNotFound from './pages/404';
import Home from "./pages";
import Checkout from './pages/checkout';
import PasswordReset from './pages/PasswordReset';
// Registered User Pages
import MyAccount from './pages/registeredPages/myaccount';
import ChangePw from './pages/registeredPages/changepw';
import OrderHistory from './pages/registeredPages/OrderHistory';
import OrderDetail from './pages/registeredPages/OrderDetail';
// Public Pages
import ShoppingCart from './pages/publicPages/ShoppingCart';
//Staff pages
import Dashboard from './pages/Staff/Dashboard';
import OrdersMaintenancePage from './pages/Staff/OrdersMaintenancePage';
import OrderDetailPage from './pages/Staff/OrderDetailPage';
import ProductsMaintenancePage from './pages/Staff/ProductsMaintenancePage';
import ProductDetailPage from './pages/Staff/ProductDetailPage';
import CategoryMaintenancePage from './pages/Staff/CategoryMaintenancePage';
import StaffReportsPage from './pages/Staff/StaffReportsPage';
import ProductListPage from './pages/publicPages/ProductListPage';
import AboutUs from './pages/publicPages/about';
import ContactUs from './pages/publicPages/contactUs';
import FAQ from './pages/publicPages/FAQ';
//Admin pages
import AddNewUser from './pages/admin/AddNewUser';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageCollections from './pages/admin/ManageCollections';
import ManageDb from './pages/admin/ManageDb';
import UpdateUser from './pages/admin/UpdateUser';
import UsersAccounts from './pages/admin/UsersAccounts';
import ProductDetail from './component/Staff/ProductDetail';



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
              <Route exact path="/myaccount/orderhistory/:orderId" element={<OrderDetail />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
              <Route path="/resetpassword" element={<PasswordReset />}/>
              <Route exact path="/productlist" element={<ProductListPage />} />
              <Route exact path="/productlist/:productId" element={<ProductDetail />} />
            </Route> 
          </Route>

          {/*Pages that dont show public topbar*/}
          <Route element={<NoTopbar />}>
            {/*Staff Pages*/}
            <Route exact path="/staff" element={<Dashboard />} />
            <Route exact path="/staff/orders" element={<OrdersMaintenancePage />} />
            <Route exact path="/staff/orders/:orderId" element={<OrderDetailPage />} />
            <Route exact path="/staff/products" element={<ProductsMaintenancePage />} />
            <Route exact path="/staff/products/:productId" element={<ProductDetailPage />} />
            <Route exact path="/staff/categories" element={<CategoryMaintenancePage />} />
            <Route exact path="/staff/reports" element={<StaffReportsPage />} />

            {/*Admin Pages*/}
            <Route exact path="/admin" element={<AdminDashboard />} />
            <Route exact path="/admin/addnewuser" element={<AddNewUser />} />
            <Route exact path="/admin/managecollections" element={<ManageCollections />} />
            <Route exact path="/admin/manage-db" element={<ManageDb />} />
            <Route exact path="/admin/updateuser" element={<UpdateUser />} />
            <Route exact path="/admin/users-accounts" element={<UsersAccounts />} />
            <Route path="/admin/users-accounts/add-new" element={<AddNewUser />} />
            <Route path="/admin/users-accounts/:id" element={<UpdateUser />} />
            <Route path="/admin/manage-db/:id" element={<ManageCollections />} />
            
            {/*Checkout Page*/}
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          
        </Routes>

    </div>
    
  );
}

export default App;
