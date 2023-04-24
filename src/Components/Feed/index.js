import "./Feed.css";
// Components
import ShareBox from "./ShareBox";
import Posts from "./Posts";

function Feed() {
  return (
    <div className="feed">
      <ShareBox />
      <Posts />
    </div>
  );
}

export default Feed;
