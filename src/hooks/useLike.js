// hooks/useLike.js
import { useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";

function useLike(postId, initialLikes) {
    const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  const handleLikeUpdate = async () => {
    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, { likes: likeCount + 1 });
      liked ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return { likeCount, handleLikeUpdate, setLiked , liked };
}

export default useLike;
