import { useState } from "react";
// Firebase
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import useUserStore from "./useUserStore";
// custom error hook
import useErrorStore from "./useErrorStore";
const usePosts = () => {
  const [user] = useUserStore();
  const [input, setInput] = useState("");
  const { newError } = useErrorStore();
  const sendPost = (e) => {
    e.preventDefault();
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
