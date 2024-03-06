//import './css/App.css';
import { Route, Routes, useLocation  } from 'react-router-dom';

import Home from "./pages";
import TopBar from './component/publicView/Topbar';
import Footer from './component/publicView/Footer';
import PageNotFound from './pages/404';
import NoTopbar from './component/publicView/NoTopbar';
import Checkout from './pages/checkout';
import MyAccount from './pages/registeredPages/myaccount';
import ChangePw from './pages/registeredPages/changepw';
import OrderHistory from './pages/registeredPages/OrderHistory';
import OrderDetail from './pages/registeredPages/OrderDetail';
import PasswordReset from './pages/PasswordReset';

import "./css/App.css"
import ShoppingCart from './pages/publicPages/ShoppingCart';

function App() {
  return (
    <div>

        <Routes>
          
          {/*Pages that show topbar footer*/}
          <Route element={<TopBar />}>
            <Route element={<Footer />}>
              <Route path="/" element={<Home />} />
              <Route path="/404" element={<PageNotFound />} />
              <Route path="/myaccount" element={<MyAccount />} />
              <Route path="/myaccount/changepw" element={<ChangePw />} />
              <Route path="/myaccount/orderhistory" element={<OrderHistory />} />
              <Route exact path="/myaccount/orderhistory/:orderId" element={<OrderDetail />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
              <Route path="/resetpassword" element={<PasswordReset />}/>
            </Route> 
          </Route>

          {/*Pages that dont show public topbar*/}
          <Route element={<NoTopbar />}>
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          
        </Routes>

    </div>
    
  );
}

export default App;
