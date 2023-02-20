import React from "react";
// Custom Hook
import useSignUp from "../../hooks/useSignUp";
function SignUpForm() {
  const [register, userInfo, updateUserInfo] = useSignUp();
  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Full name"
        required
        value={userInfo.name}
        onChange={(e) => updateUserInfo(e)}
      />
      <input
        type="text"
        name="profileURL"
        placeholder="Profile pic URL (optional)"
        value={userInfo.profileURL}
        onChange={(e) => updateUserInfo(e)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userInfo.email}
        onChange={(e) => updateUserInfo(e)}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={userInfo.password}
        autoComplete="on"
        onChange={(e) => updateUserInfo(e)}
        required
      />
      <button type="submit" onClick={register}>
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
