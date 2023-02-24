import "./Login.css";
import { lazy, Suspense } from "react";
import { useCallback, useState } from "react";
// Images
import LinkedIn from "../../images/linkedin-cover.png";
// Components
const LoginForm = lazy(() => import("./LoginForm"));
const SignUpForm = lazy(() => import("./SignUpForm"));

function Login() {
  const [signup, setSignup] = useState(false);
  const handleSign = useCallback(() => {
    setSignup((prevSign) => !prevSign);
  }, []);

  return (
    <div className="login">
      <img src={LinkedIn} alt="Linkedin Cover" />
      <Suspense>
        {signup ? (
          <SignUpForm handleSign={handleSign} />
        ) : (
          <LoginForm handleSign={handleSign} />
        )}
      </Suspense>
    </div>
  );
}

export default Login;
