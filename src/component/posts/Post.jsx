/* eslint-disable react/prop-types */
// components/Post/Post.js
import PostProfile from "./PostProfile";
import PostContent from "./PostContent";
import PostMedia from "./PostMedia";
import PostFooter from "./PostFooter";


function Post({ post }) {
 console.log(post);
  return (
    <div className="w-100 bg-white mb-2 rounded`-lg border  border-gray-300">
      <PostProfile data={post.user} />
      <PostContent text={post.post_content} />
      <PostMedia media={post.post_media_content} />
      <PostFooter
        likes={post.likes}
        comments={post.comments}
        reposts={post.reposts}
        postId={post.id}
      />
    </div>
  );
}

export default Post;
