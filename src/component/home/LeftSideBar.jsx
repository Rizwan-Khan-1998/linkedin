import { UserInfoProvider } from "./Provider";
import ProfileInfoCard from "./ProfileInfoCard";

function LeftSideBar() {
  return ( 
    <div className="w-[225px] rounded-lg" >
      <ProfileInfoContainer />
    </div>
   );
}



function ProfileInfoContainer() {
  return (
    <UserInfoProvider> 
      <ProfileInfoCard />
    </UserInfoProvider>
    
  );
}

export default LeftSideBar;
