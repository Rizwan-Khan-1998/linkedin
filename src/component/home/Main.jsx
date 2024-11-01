
import { UserInfoProvider } from "./Provider";
import WritePostContainer from "./WritePost";
import Posts from '../posts/Posts';


function Main() {

 
  return (
    <div className="w-1/2 h-screen ">
      <UserInfoProvider>
        <WritePostContainer  />
      </UserInfoProvider>
      <Posts/>
    </div>
  );
}

export default Main;
