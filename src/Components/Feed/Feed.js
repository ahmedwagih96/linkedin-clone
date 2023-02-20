import "./Feed.css";
import { useEffect, useState } from "react";

// Material UI
import {
  Create,
  Image,
  CalendarViewDay,
  EventNote,
  Subscriptions,
} from "@mui/icons-material";

// Animation
import FlipMove from "react-flip-move";

// Components
import InputOption from "../InputOption/InputOption";
import Posts from "../Posts/Posts";

// Firebase
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);
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
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Posts
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
