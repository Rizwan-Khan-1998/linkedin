import { useEffect, useState } from "react";
import { db, storage } from "../lib/firebaseConfig"; // Adjust the import based on your file structure
import { collection, getDocs, getDoc } from "firebase/firestore"; // Firestore functions
import { ref, getDownloadURL } from "firebase/storage"; // Storage functions

const useFetchPost = () => {
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const posts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        // Fetch user data for each post
        const postsWithUserDetails = await Promise.all(
          posts.map(async (post) => {
            const userRef = post.user; // Assuming this is a reference to the user document
            const userSnap = await getDoc(userRef);
            const mediaRef = ref(storage, post.post_media_content); // Assuming post_media_content stores the path
            const downloadURL = await getDownloadURL(mediaRef).catch((error) => {
              console.error("Error getting download URL: ", error);
              return null; // Return null if there's an error
            });
            const userData = userSnap.exists() ? userSnap.data() : null;
            const profilePicPath = userSnap.exists() ? userSnap.data().profile_pic : null;
            console.log(profilePicPath);
            
            const profileURL =await getDownloadURL(ref(storage, profilePicPath)).catch((error) => {
                  console.error("Error getting profile picture URL: ", error);
                  return null;
                })
                
            console.log(profileURL);
            const userWithProfilePic = userData ? { ...userData, profile_pic: profileURL } : null;
            return {
              ...post,
              user: userWithProfilePic,
              post_media_content: downloadURL,
              
            };
          })
        );
        setPostsData(postsWithUserDetails);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setError(err);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);
  
  return { postsData, loading, error }; 
};

export default useFetchPost;
