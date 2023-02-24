import React from "react";
// Custom Hook
import useLogin from "../../hooks/useLogIn";
import useInput from "../../hooks/useInput";

function LoginForm({ handleSign }) {
  const loginToApp = useLogin();
  const [userInfo, updateUserInfo] = useInput();

  const SubmitForm = (e) => {
    e.preventDefault();
    loginToApp(userInfo);
  };
  return (
    <>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={(e) => updateUserInfo(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userInfo.password}
          autoComplete="on"
          onChange={(e) => updateUserInfo(e)}
        />
        <button type="submit" onClick={(e) => SubmitForm(e)}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={handleSign}>
          Register Now
        </span>
      </p>
    </>
  );
}

export default LoginForm;
