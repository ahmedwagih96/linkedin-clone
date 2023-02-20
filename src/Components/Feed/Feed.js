import "./Feed.css";
// Custom Hooks
import usePosts from "../../hooks/usePosts"

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


function Feed() {
  const [posts, sendPost, input, setInput] = usePosts()

  return (
    <div className="feed">
      {/* INPUT */}
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
      {/* POSTS */}
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
