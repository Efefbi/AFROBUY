import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { signout } from './actions/userActions';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import { ShippingAddressScreen } from './screens/shippingAddressScreen';
import SignininScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector(state => state.cart);
  const {cartItems}  = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
 return (
   <BrowserRouter>
     <div className="grid-container">
      <header className="row">
       <div>
         <Link className="brand" to="/">AfroBuy</Link>
       </div>
       <div>
          <Link to="/cart">Cart
            {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
          </Link>
          {
            userInfo ? (
            <div className="dropdown">
              <Link to="#">
                {userInfo.name}<i className="fa fa-caret-down"></i>{' '}
              </Link>
              <ul className="drowpdown-content">
               <li>
                  <Link to="/profile">User Profile</Link>
                </li>
                <li>
                  <Link to="/orderhistory">Order History</Link>
                </li>
                <li>
                  <link to="#signout" onClick={signoutHandler}>
                    Sign Out
                  </link>
                </li>
              </ul>
             </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )
          }
        
       </div>
     </header>
     <main>
       <Routes>
         <Route path="/cart/:id?" component={CartScreen}></Route>
         <Route path = "/product/:id" component={ProductScreen} />
         <Route path="signin" component={SignininScreen}></Route>
         <Route path="register" component={RegisterScreen}></Route>
         <Route path="/shipping" component={ShippingAddressScreen}></Route>
         <Route path="/payment" component={PaymentMethodScreen}></Route>
         <Route path="/placeorder" component={PlaceOrderScreen}></Route>
         <Route path="/order/:id" component={OrderScreen}></Route>
         <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
         <PrivateRoute path="/profile" component= {ProfileScreen}> </PrivateRoute>
         <Route path="/" component={HomeScreen} exact /> 
       </Routes>
      {/*Code moved to HomeScreen.js
       <div>
        <div className="row center">
          {
           data.products.map((product) =>(
            <Product key={product._id} product={product}></Product>
          )
        )
       }
       </div>
      </div>*/}
     </main>
     <footer className="row center">All right reserved</footer>
    </div>

   </BrowserRouter>
    );
}

export default App;
