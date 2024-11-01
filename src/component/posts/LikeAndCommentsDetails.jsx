/* eslint-disable react/prop-types */
// components/Post/LikeAndCommentsDetails.js
function LikeAndCommentsDetails({ likes, comments, reposts }) {
    return (
      <div className="flex justify-between px-4 my-2">
        <div className="flex items-center gap-1">
          <img src="images/likeColored.png" alt="like" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <span>{comments} Comments</span>
          <span>•</span>
          <span>{reposts} Reposts</span>
        </div>
      </div>
    );
  }
  
  export default LikeAndCommentsDetails;
  