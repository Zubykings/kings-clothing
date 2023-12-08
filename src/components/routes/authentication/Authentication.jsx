import { Routes, Route } from "react-router-dom";

import SignIn from "./sign-in/SignIn";
import SignUp from "./register/SignUp";

import { Container } from "./authentication.style";

const Authentication = () => {
  return (
    <Container>
      <div>THIS IS A HERO SECTION</div>
      <Routes>
        <Route path="log-in" element={<SignIn />} />
        <Route path="register" element={<SignUp />} />
      </Routes>
    </Container>
  );
};

export default Authentication;
