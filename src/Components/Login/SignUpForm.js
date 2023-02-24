import React from "react";
// Custom Hook
import useSignUp from "../../hooks/useSignUp";
import useInput from "../../hooks/useInput";
function SignUpForm({ handleSign }) {
  const [register] = useSignUp();
  const [userInfo, updateUserInfo] = useInput();

  const SubmitForm = (e) => {
    e.preventDefault();
    register(userInfo);
  };
  return (
    <>
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
        <button type="submit" onClick={(e) => SubmitForm(e)}>
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <span className="login__register" onClick={handleSign}>
          Log In
        </span>
      </p>
    </>
  );
}

export default SignUpForm;
