import { Routes, Route } from "react-router-dom";


import Home from "./components/routes/home/Home";
import Navbar from "./components/routes/navigation/Navbar";
import Authentication from "./components/routes/authentication/Authentication";

const Shop = () => {
  return (
    <div>
      <h1>I am the shop page</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
