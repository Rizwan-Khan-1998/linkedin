/* eslint-disable react/prop-types */
// components/Post/PostFooter.js

import LikeAndCommentsDetails from "./LikeAndCommentsDetails";
import PostActions from "./PostActions";
import useLike from "../../hooks/useLike";

function PostFooter({ likes, comments, reposts, postId }) {
  const { likeCount, handleLikeUpdate, setLiked, liked } = useLike(postId, likes);

  return (
    <>
      <LikeAndCommentsDetails likes={likeCount} comments={comments} reposts={reposts} />
      <PostActions handleLikeUpdate={handleLikeUpdate} setLiked={setLiked} liked={liked}/>
    </>
  );
}

export default PostFooter;
