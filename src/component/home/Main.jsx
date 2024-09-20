
import { UserInfoProvider } from "../../contextApi/provider";
import WritePostContainer from "./WritePost";


function Main() {

 
  return (
    <div className="w-1/2 h-screen ">
      <UserInfoProvider>
        <WritePostContainer  />
      </UserInfoProvider>
    </div>
  );
}

export default Main;
