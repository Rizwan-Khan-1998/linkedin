import { useContext } from "react";
import { UserContext } from "./context";


export default function ProfileInfoCard() {
  const userInfo = useContext(UserContext);

  return (
    <div className="rounded bg-white border-2 border-gray-200">
      <div className="relative">
      <img className="w-full rounded-t-lg" src={userInfo.coverPic} alt="" />
      <img
            className=" top-1/2 left-4 absolute rounded-full w-20 h-20 border-2 border-white"
            src={userInfo.profilePic}
            alt=""
          />
      </div>
      
      <div className="px-4">
        <div className="flex flex-col justify-center pt-14 pb-4">
        
          <h1 className="text-xl font-semibold ">{userInfo.name}</h1>
          <p className="text-xs">{userInfo.bio}</p>
          <p className="text-xs text-gray-500 mt-2 mb-1">{userInfo.city}</p>
          <a>
            <img
              src={userInfo.Company.cImg}
              alt=""
              className="inline w-8 h-8 rounded-lg"
            />
            <span className="text-sm font-medium mx-1">
              {userInfo.Company.Cname}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
