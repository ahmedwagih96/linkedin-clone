import { useState } from "react";
// Firebase
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import useUser from "./useUser";

const usePosts = () => {
  const user = useUser();
  const [input, setInput] = useState("");

  const sendPost = (e) => {
    e.preventDefault();
    const postsCol = collection(db, "posts");
    addDoc(postsCol, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: serverTimestamp(),
    }).then(() => setInput(""));
  };

  return [sendPost, input, setInput];
};

export default usePosts;
