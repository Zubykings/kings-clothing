import SignUpForm from "../../sign-up form/SignUpForm";
import SignInForm from "../../sign-in-form/Sign-in-component";

import { Container } from "./authentication.style";

const Authentication = () => {
  return (
    <Container>
      <SignInForm />
      <SignUpForm />
    </Container>
  );
};

export default Authentication;
