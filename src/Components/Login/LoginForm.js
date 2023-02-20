import React from "react";
// Custom Hook
import useLogin from "../../hooks/useLogIn";

function LoginForm() {
  const [loginToApp, userInfo, updateUserInfo] = useLogin();
  return (
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
      <button type="submit" onClick={loginToApp}>
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
