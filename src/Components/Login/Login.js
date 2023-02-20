import "./Login.css";
import { useState } from "react";
import "react-tabs/style/react-tabs.css";
// Images
import LinkedIn from "../../images/linkedin-cover.png";
// Redux
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
// Firebase
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    profileURL: "",
  });
  const [signup, setSignup] = useState(false);
  const dispatch = useDispatch();
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: userInfo.name,
          photoURL: userInfo.profileURL,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoURL: userAuth.user.photoURL,
            })
          );
        });
      })
      .catch((error) => {
        return alert(error);
      });
  };

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const updateUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };

  const handleSign = () => {
    setSignup((prevSign) => !prevSign);
  };

  return (
    <div className="login">
      <img src={LinkedIn} alt="Linkedin Cover Image" />
      {!signup && (
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
      )}
      {signup && (
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
      )}
      {!signup && (
        <p>
          Not a member?{" "}
          <span className="login__register" onClick={handleSign}>
            Register Now
          </span>
        </p>
      )}
      {signup && (
        <p>
          Already have an account?{" "}
          <span className="login__register" onClick={handleSign}>
            Log In
          </span>
        </p>
      )}
    </div>
  );
}

export default Login;
