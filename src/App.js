import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/home/Home";
import Navbar from "./components/routes/navigation/Navbar";
import Shop from "./components/routes/shop/Shop";

import Authentication from "./components/routes/authentication/Authentication";
import CheckOut from "./components/checkout/checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
