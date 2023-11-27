import SignUpForm from "../../sign-up form/SignUpForm";
import SignInForm from "../../sign-in-form/Sign-in-component";

import './authentication.scss'

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
