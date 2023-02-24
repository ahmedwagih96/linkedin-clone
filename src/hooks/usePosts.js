import { useEffect, useState } from "react";
// Firebase
import { db } from "../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import useUser from "./useUser";

const usePosts = () => {
  const user = useUser();
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    // setPosts
    const postsCol = collection(db, "posts");
    addDoc(postsCol, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: serverTimestamp(),
    }).then(() => setInput(""));
  };

  return [posts, sendPost, input, setInput ];
};

export default usePosts;
