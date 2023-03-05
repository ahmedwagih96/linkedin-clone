import { useState } from "react";
// Firebase
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import useUser from "./useUser";
// custom error hook
import useError from "./useError";
const usePosts = () => {
  const [user] = useUser();
  const [input, setInput] = useState("");
  const { newError } = useError();
  const sendPost = (e) => {
    e.preventDefault();
    console.log(user);
    const postsCol = collection(db, "posts");
    addDoc(postsCol, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: serverTimestamp(),
    })
      .then(() => setInput(""))
      .catch((error) => {
        newError(error);
        return;
      });
  };

  return [sendPost, input, setInput];
};

export default usePosts;
