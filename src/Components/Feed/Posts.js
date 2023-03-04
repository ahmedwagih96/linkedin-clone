// Custom Hooks
import useFetchPosts from "../../hooks/useFetchPosts";
// Animation
import FlipMove from "react-flip-move";
// Components
import Post from "../Post/Post";
import Skeletons from "../Skeletons/Skeletons";
function Posts() {
  const [posts, isLoading] = useFetchPosts();
  return (
    <>
      {isLoading ? (
        [...Array(6).keys()].map((i) => <Skeletons key={i} />)
      ) : (
        <FlipMove>
          {posts.map(({ id, data }) => (
            <Post key={id} data={data} />
          ))}
        </FlipMove>
      )}
    </>
  );
}

export default Posts;
