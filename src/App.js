import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/home/Home";
import Navbar from "./components/routes/navigation/Navbar";
import Shop from "./components/routes/shop/Shop";
import Checkout from "./components/routes/checkout/checkout";

import Authentication from "./components/routes/authentication/Authentication";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth/*" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        
      </Route>
    </Routes>
  );
};

export default App;
