/* eslint-disable react/prop-types */
// components/Post/PostProfile.js
function PostProfile({ data }) {
    return (
      <div className="px-4 pt-4 flex gap-4">
        <img className="rounded-full w-12 h-12" src={data.profile_pic} alt="" />
        <div className="flex items-center grow">
          <p className="text-black font-semibold">
            {data.name} <br />
            <span className="text-sm text-gray-500">{data.bio}</span>
          </p>
        </div>
        <h2 className="text-lg font-semibold text-blue-700 self-end hover:cursor-pointer">
        <span className="text-xl font-bold">+</span> Follow
      </h2>
      </div>
    );
  }
  
  export default PostProfile;
  