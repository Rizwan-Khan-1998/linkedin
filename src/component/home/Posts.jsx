/* eslint-disable react/prop-types */

import { useRef, useState, useEffect } from "react";
import { updateDoc, doc } from 'firebase/firestore';
import { db } from "../../lib/firebaseConfig";


import useFetchPost from "../../hooks/useFetchPost";




// eslint-disable-next-line react/prop-types
function PostProfile({ data }) {
  console.log(data);
 
  return (
    <div className="px-4 pt-4 flex gap-4">
      <img className="rounded-full w-12 h-12" src={data.profile_pic} alt="" />
      <div className="flex items-center grow">
        <p className="text-black text-large font-semibold justify-self-end leading-none">
          {data.name} <br></br>
          <span className="text-sm text-gray-500 justify-self-start font-normal">
            {data.bio}
          </span>
        </p>
      </div>
      <h2 className="text-lg font-semibold text-blue-700 self-end hover:cursor-pointer">
        <span className="text-xl font-bold">+</span> Follow
      </h2>
    </div>
  );
}

function Content({ text, limit = 140 }) {
  const [expanded, setExpanded] = useState(true);
  const isTruncated = text.length > limit;

  function truncateText(text, limit) {
    if (text.length <= limit) {
      return text;
    }
    const truncated = text.substring(0, limit);
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    return lastSpaceIndex !== -1
      ? truncated.substring(0, lastSpaceIndex)
      : truncated;
  }

  const subText = truncateText(text, limit);

  return (
    <>
      <pre className="px-4 py-8 whitespace-pre-wrap">
        {expanded ? subText : text}
        {isTruncated && (
          <span
            className="text-gray-500 font-normal hover:text-blue-800 hover:underline  hover:decoration-1 hover:cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "...more" : ""}
          </span>
        )}
      </pre>
    </>
  );
}

function Media({ media }) {
  return (
    <>
      {media ? (
        <img
          className="max-h-[400px] w-[100%] object-center"
          src={media}
          alt=""
        />
      ) : null}
    </>
  );
}

function LikeAndCommentsDetaies({ likes, comments, reposts }) {
  return (
    <>
      <div className="flex items-center justify-between  px-4 my-2">
        <div className="flex items-center">
          <span>
            <img src="images/likeColored.png" alt="" />
          </span>
          <span className="-translate-x-1/4">
            <img src="images/lightColored.png" alt="" />
          </span>
          <span className="-translate-x-2/4">
            <img src="images/heartColored.png" alt="" />
          </span>
          <span className="text-sm">{likes}</span>
        </div>

        <div className="flex gap-1 items-center text-gray-500 text-sm">
          <span>{comments} Comments</span>
          <div className="flex items-center justify-center">
            <div className="w-1 h-1 bg-gray-500 rounded-full translate-y-1/2"></div>
          </div>
          <span>{reposts} Reposts</span>
        </div>
      </div>
      <div className="bg-gray-300 w-100 h-[2px] px-4 m-2"></div>
    </>
  );
}

function PostComment() {
  const inputRef = useRef(null); // Ref for both input and textarea
  const [comment, setComment] = useState(""); // Track comment content
  const [isTyping, setIsTyping] = useState(false); // Switch between input and textarea

  // Focus on the textarea after switching
  useEffect(() => {
    if (isTyping && inputRef.current) {
      inputRef.current.focus(); // Ensure focus stays on the element
      inputRef.current.selectionStart = inputRef.current.value.length; // Move cursor to the end
    }
  }, [isTyping]); // Runs when `isTyping` changes

  // Handle input/textarea changes
  function handleComment(e) {
    const value = e.target.value;
    setComment(value); // Update comment

    if (value.length > 0) {
      setIsTyping(true); // Switch to textarea if the user starts typing
    } else {
      setIsTyping(false); // Switch back to input if all text is deleted
    }
  }

  // Adjust textarea height dynamically
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`; 
    }
  }, [comment]); // Runs when the comment changes

  return (
    <div className="flex px-4 gap-2 items-center mt-4">
      <img
        src="images/profile-pic.png"
        alt="Profile"
        className="rounded-full w-8 h-8"
      />

      <div
        className={`flex grow border border-gray-400 rounded-${
          isTyping ? "[8px]" : "full"
        } py-1 px-4 gap-2 ${isTyping ? "flex-col" : ""}`}
      >
        {isTyping ? (
          <textarea
            ref={inputRef}
            className="grow border-none outline-none placeholder:text-gray-600 overflow-hidden"
            style={{
              resize: "none", // Disable resizing
              overflow: "hidden", // Hide scrollbars
              minHeight: "40px", // Initial height
              maxHeight: "300px", // Optional: Set max height
            }}
            placeholder="Add a comment..."
            value={comment}
            onChange={handleComment}
          />
        ) : (
          <input
            type="text"
            ref={inputRef}
            className="grow border-none outline-none placeholder:text-gray-600"
            placeholder="Add a comment..."
            value={comment}
            onChange={handleComment}
          />
        )}

        <div className="flex justify-between items-center">
          <div className="flex">
            <img src="images/emoji.png" alt="Emoji" className="w-6 h-6" />
            <img
              src="images/comment-media.png"
              alt="Media"
              className="w-6 h-6"
            />
          </div>
          {isTyping && (
            <button className="bg-blue-600 text-white px-3 py-1 text-sm  font-semibold rounded-full">
              Comment
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Comment({ comments }) {
  return (
    <>
      {comments.map((comment, index) => (
        <>
          <div className="px-4 pt-4 flex gap-2" key={index}>
            <div className="rounded-full w-7 h-7 bg-red-800" />
            <div className="flex flex-col grow">
              <p className="text-black text-sm font-semibold justify-self-end leading-none">
                {comment.name} <br />
                <span className="text-xs text-gray-500 justify-self-start font-normal">
                  Full Stack Java Developer
                </span>
              </p>
              <pre className="mt-2">{comment.comment}</pre>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

function PostComments({ showComment, comments }) {
  if (showComment) return;
  return (
    <div className="w-100">
      <PostComment />
      <Comment comments={comments} />
    </div>
  );
}
function PostActionButtons({ handleLikeUpdate, handleComments }) {
  const [liked, setLiked] = useState(false);


  return (
    <div className="flex justify-between px-4">
      <button className={`post-action-button`} onClick={() =>{handleLikeUpdate; setLiked(!liked)}}>
        <img
          className="post-action-button-img"
          src={!liked ? `images/like-action.svg` : `images/liked-btn.svg`}
          alt=""
        />
        <span>Likes</span>
      </button>
      <button className="post-action-button" onClick={handleComments}>
        <img
          className="post-action-button-img"
          src="images/post-action-comments.png"
          alt=""
        />
        <span>Comments</span>
      </button>
      <div className="post-action-button">
        <img
          className="post-action-button-img"
          src="images/post-action-repost.png"
          alt=""
        />
        <span>Reposts</span>
      </div>
      <div className="post-action-button">
        <img
          className="post-action-button-img"
          src="images/post-action.png"
          alt=""
        />
        <span>Share</span>
      </div>
    </div>
  );
}

function PostFooter({ likes, comments, reposts, handleComments, id }) {
  const [like, setLike] = useState(likes);
  const handleLikeUpdate = async () => {
 
    try {
      // Reference the document by ID in the posts collection
      const postRef = doc(db, "posts", id);

      // Update only the specified fields
      await updateDoc(postRef, {
        likes: likes + 1,
      });

    } catch (error) {
      console.error("Error updating document: ", error);
    }
    setLike(likes + 1);
  };
  return (
    <>
      <LikeAndCommentsDetaies
        likes={like}
        comments={comments}
        reposts={reposts}
      />
      <PostActionButtons handleLikeUpdate={handleLikeUpdate} handleComments={handleComments} /> 
    </>
  );
}
function Post({ post }) {
  
  console.log(post);
  const [showComment, setShowComment] = useState(true);

  function handleComments() {
    setShowComment(!showComment);
  }
  return (
    <div className="w-100 bg-white mb-2">
      <PostProfile data={post.user} />  
      <Content text={post.post_content} />
      <Media media={post.post_media_content}/>

      <PostFooter
        likes={post.likes}
        comments={post.comments}
        reposts={post.reposts}
        id = {post.id}
        handleComments={handleComments}
      /> 
      {/* <PostComments showComment={showComment} comments={post.comments} />  */}
    </div>
  );
}

export default function Posts() {
  const { postsData, loading, error } = useFetchPost();
  console.log(postsData);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;
  if (!postsData || postsData.length === 0) return <p>No posts available</p>;
  return (
    <>
     <Post post={postsData[0]}/>
      <Post post={postsData[1]}/> 
     
    </>
  );
}
