/* eslint-disable react/prop-types */

import { useRef, useState, useEffect } from "react";

/* eslint-disable no-unused-vars */
const user = {
  name: "Rizwan Khan",
  profilePic: "images/profile-pic.png",
  coverPic: "images/cover-photo-user.png",
  bio: "Passionate Self-Taught Software Developer",
  city: "Indore, Madhya Pradesh, India",
  Company: {
    Cname: "Wipro",
    Cweb: "https://www.wipro.com/",
    cImg: "images/company-logo.png",
  },
};
// eslint-disable-next-line no-unused-vars
const posts = [
  {
    text: `Success isn't just about talent.

It's about choices.

10 things that require 0 talent but make you unstoppable:

1. Being on time
↳ Respect others, respect yourself
↳ Punctuality is the easiest promise to keep

2. Work ethic
↳ Outwork your excuses
↳ Hustle beats talent when talent doesn't hustle

3. Effort
↳ Go the extra mile. It's never crowded
↳ The only bad workout is the one that didn't happen

4. Energy
↳ Enthusiasm is contagious
↳ Be the battery, not the drain

5. Body language
↳ Stand tall, go far
↳ Your vibe attracts your tribe

6. Passion
↳ Set yourself on fire and people will come to watch you burn
↳ Love what you do, or love why you do it

7. Doing extra
↳ Average is overcrowded
↳ The extra mile is your fast lane to success

8. Being prepared
↳ Luck is when preparation meets opportunity
↳ If you stay ready, you never have to get ready

9. Being coachable
↳ The day you stop learning is the day you stop leading
↳ Be a sponge, not a rock

10. Being kind`,
    postMedia: "images/profile-pic.png",
    likes: 25,
    comments: [
      {
        name: "Shahzeb Qureshi",
        comment: "well said bro",
      },
    ],
    reposts: 15,
    postedTime: function () {
      return new Date();
    },
  },
  {
    text: "my name is rizwan",
    postMedia: "images/profile-pic.png",
    likes: 5,
    comments: [
      {
        name: "Shahzeb Qureshi",
        comment: "well said bro",
      },
    ],
    reposts: 15,
    media: "images/karsten.jpg",
    postedTime: function () {
      return new Date();
    },
  },
  {
    text: `We Are Hiring - hashtag#Freshers, hashtag#Internship & Experience 
(College Student) & 
Entry Level candidate-2024

hashtag#Salary: 25K - 80K in Hand + Incentive Shift


hashtag#Apply Here :- https://lnkd.in/eUVN5bk7

hashtag#Salary: 25K - 80K in Hand + Incentive Shift

hashtag#Timings :: 09:00am To6:0 00pm
**Laptop Kit Will be Provided By Company
-5 Days Working (( Sat- Sun Fixed Off)

Role:-
- Entry Level -8
- Freshers -8
- Banking-8
- Assistant HR-8
- Java -8
- SAP fresher -8
- CA/ CS intern -8
- Copy paste work -20
- Data Entry Level -13
- Admin -9
- HR-7
- Manual Testing -7
- Business Analysis.-8
-Software Trainee
-QA Engineer -8
-Account -8`,
    postMedia: "images/profile-pic.png",
    likes: 3,
    comments: [
      {
        name: "Shahzeb Qureshi",
        comment: "well said bro",
      },
    ],
    reposts: 15,
    media: "images/samsung.jpg",
    postedTime: function () {
      return new Date();
    },
  },
];

const name = "Rizwan Khan";

// eslint-disable-next-line react/prop-types
function PostProfile({ data }) {
  console.log("im user data " + data);
  return (
    <div className="px-4 pt-4 flex gap-4">
      <img className="rounded-full w-12 h-12" src={data.profilePic} alt="" />
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
      inputRef.current.style.height = "auto"; // Reset height
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`; // Adjust height to fit content
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
          <div
            className="rounded-full w-7 h-7 bg-red-800"
          />
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
function PostActionButtons({ setLike, handleComments }) {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    if (!liked) {
      setLike((prev) => prev + 1);
      setLiked(!liked);
    } else {
      setLike((prev) => prev - 1);
      setLiked(!liked);
    }
  }
  return (
    <div className="flex justify-between px-4">
      <button className={`post-action-button`} onClick={handleLike}>
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

function PostFooter({ likes, comments, reposts, handleComments }) {
  const [like, setLike] = useState(likes);

  return (
    <>
      <LikeAndCommentsDetaies
        likes={like}
        comments={comments.length}
        reposts={reposts}
      />
      <PostActionButtons setLike={setLike} handleComments={handleComments} />
    </>
  );
}
function Post({ post }) {
  const [showComment, setShowComment] = useState(true);

  function handleComments() {
    setShowComment(!showComment);
  }
  return (
    <div className="w-100 bg-white mb-2">
      <PostProfile data={user} />
      <Content text={post.text} />

      <PostFooter
        likes={post.likes}
        comments={post.comments}
        reposts={post.reposts}
        handleComments={handleComments}
      />
      <PostComments showComment={showComment} comments={post.comments} />
    </div>
  );
}

export default function Posts() {
  return (
    <>
      <Post post={posts[0]} />
      <Post post={posts[1]} />
      <Post post={posts[2]} />
    </>
  );
}
