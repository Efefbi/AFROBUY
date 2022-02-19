import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
 return (
   <BrowserRouter>
     <div className="grid-container">
      <header className="row">
       <div>
         <a className="brand" href="/">AfroBuy</a>
       </div>
       <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
       </div>
     </header>
     <main>
       <Routes>
         <Route path = "/product/:id" component={ProductScreen} />
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
