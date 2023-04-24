import "./Feed.css";
// Components
import Input from "./Input";
import Posts from "./Posts";

function Feed() {
  return (
    <div className="feed">
      <Input />
      <Posts />
    </div>
  );
}

export default Feed;
