import "./Login.css";
import { useCallback, useState } from "react";
import { lazy, Suspense } from "react";
// Images
import LinkedIn from "../../images/linkedin-cover.png";
// Components
const LoginForm = lazy(() => import("../../Components/Forms/LoginForm"));
const SignUpForm = lazy(() => import("../../Components/Forms/SignUpForm"));
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
