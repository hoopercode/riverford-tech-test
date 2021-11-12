import React, { useState } from "react";
import Form from "../../components/Form/Form.jsx";
import lhsIllustration from "../../assets/images/trialRotate.png";
import rhsIllustration from "../../assets/images/RHS-Rotated.png";
import Spinner from "../../components/Spinner/Spinner";
import Complete from "../../components/Complete/Complete.jsx";
import "./SignIn.scss";

const SignIn = () => {
  const [signInStatus, setSignInStatus] = useState(true);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [signUpComplete, setSignUpComplete] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);


  const togglePassword = (e) => {
    setPasswordShown(!passwordShown);
    e.preventDefault();
  };

  const toggleSuccess = () => {
    setSignUpComplete(!signUpComplete);
    setLoadingStatus(false);
  };

  const toggleSignIn = () => {
    setSignInStatus(!signInStatus);
    setLoadingStatus(!loadingStatus);
    setInterval(toggleSuccess, 2000);
  };

  return (
    <div className="signIn">
      <div className="signIn__leftIllustration">
        <img className="signIn__image--left" src={lhsIllustration} alt="" />
      </div>

      <div
        className={`${
          signInStatus ? "signIn__form" : "signIn__form--inactive"
        }`}
      >
        <h1 className="signIn__header">Sign Up</h1>

        <Form toggleSignIn={toggleSignIn} togglePassword={togglePassword} passwordShown={passwordShown}/>
      </div>
      <div
        className={`${
          loadingStatus
            ? "signIn__spinner--active"
            : "signIn__spinner--inactive"
        }`}
      >
        <Spinner />
      </div>
      <div
        className={`${
          signUpComplete
            ? "signIn__complete--active"
            : "signIn__complete--inactive"
        }`}
      >
        <Complete />
      </div>
      <div className="signIn__rightIllustration">
        <img className="signIn__image--right" src={rhsIllustration} alt="" />
      </div>
    </div>
  );
};

export default SignIn;
