import "./Login.css";
import { useState } from "react";
import "react-tabs/style/react-tabs.css";
// Images
import LinkedIn from "../../images/linkedin-cover.png";
// Components
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login() {
  const [signup, setSignup] = useState(false);
  const handleSign = () => {
    setSignup((prevSign) => !prevSign);
  };

  return (
    <div className="login">
      <img src={LinkedIn} alt="Linkedin Cover" />
      {signup ? <SignUpForm /> : <LoginForm />}
      {signup ? (
        <p>
          Already have an account?{" "}
          <span className="login__register" onClick={handleSign}>
            Log In
          </span>
        </p>
      ) : (
        <p>
          Not a member?{" "}
          <span className="login__register" onClick={handleSign}>
            Register Now
          </span>
        </p>
      )}
    </div>
  );
}

export default Login;
