import { useEffect, useState } from "react";
// Firebase
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      setIsLoading(false);
    });
  }, []);

  return [posts, isLoading];
};

export default usePosts;
