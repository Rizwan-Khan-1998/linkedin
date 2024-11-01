/* eslint-disable react/prop-types */
// components/Post/PostActions.js
import { useState } from "react";

function PostActions({ handleLikeUpdate , setLiked, liked }) {
    
  

  return (
    <div className="flex justify-between px-4">
      <button onClick={() => { handleLikeUpdate(); setLiked(!liked); }} className="post-action-button">
        <img src={!liked ? "images/like-action.svg" : "images/liked-btn.svg"} alt="like" className="post-action-button-img"  />
        <span>Likes</span>
      </button>
      <button className="post-action-button">
        <img src="images/post-action-comments.png" alt="comments" className="post-action-button-img" />
        <span>Comments</span>
      </button>
      <button className="post-action-button">
        <img src="images/post-action-repost.png" alt="reposts"  className="post-action-button-img" />
        <span>Reposts</span>
      </button>
      <button className="post-action-button">
        <img src="images/post-action.png" alt="share" className="post-action-button-img"  />
        <span>Share</span>
      </button>
    </div>
  );
}

export default PostActions;
