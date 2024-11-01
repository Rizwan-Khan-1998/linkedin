import Post from "./Post";
import useFetchPost from "../../hooks/useFetchPost";

export default function Posts() {
  const { postsData, loading, error } = useFetchPost();
  console.log(postsData);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;
  if (!postsData || postsData.length === 0) return <p>No posts available</p>;
  return (
    <>
      <Post post={postsData[0]} />
      <Post post={postsData[1]} />
    </>
  );
}
