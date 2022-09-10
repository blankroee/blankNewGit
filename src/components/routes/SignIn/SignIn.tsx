import React from "react";
import "./SignIn.css";
import {
  signInWithGooglePopup,
  creatUserDocumentByAuth,
} from "../../../utils/firbase/Firebase";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creatUserDocumentByAuth(user);
  };
  return (
    <div className="signInDiv">
      <h1 className="koteret">Sign In Page</h1>
      <button onClick={logGoogleUser}>sign in</button>
    </div>
  );
}
