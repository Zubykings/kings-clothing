import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/Home";
import Navbar from "./components/routes/navigation/Navbar";
import SignIn from "./components/routes/sign-in/signIn";

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
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
