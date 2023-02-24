// Custom Hooks
import usePosts from "../../hooks/usePosts";
// Animation
import FlipMove from "react-flip-move";
// Components
import Post from "../Post/Post";
function Posts() {
  const [posts] = usePosts();

  return (
    <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </FlipMove>
  );
}

export default Posts;
