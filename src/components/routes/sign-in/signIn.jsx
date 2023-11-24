// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
//   auth,
//   signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up form/SignUpForm";

const SignIn = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await getRedirectResult(auth);
//     //   console.log(response);
//         if (response) {
//           const userDocRef = await createUserDocumentFromAuth(response.user);
//         }
//     };

//     fetchData(); // Invoke the async function
//   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>sign in with google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
