import { UserContext } from "./context";
import PropTypes from 'prop-types';


const userInfo = {
    name: "Rizwan Khan",
    profilePic: 'images/profile-pic.png', 
    coverPic: 'images/cover-photo-user.png', 
    bio: 'Passionate Self-Taught Software Developer',
    city: 'Indore, Madhya Pradesh, India',
    Company: {Cname: 'Wipro', Cweb: 'https://www.wipro.com/', cImg : 'images/company-logo.png'},
}
function UserInfoProvider({ children }) {

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
}


UserInfoProvider.propTypes = {
    children: PropTypes.node.isRequired,
};



export { UserInfoProvider };
