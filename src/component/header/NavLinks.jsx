import MenuLink from "./MenuLink";

function NavLinks() {
  return (
    <div className="flex gap-3 ">
      <MenuLink
        to="/"
        imageActive="images/activeHome.png"
        image="images/home.png"
        title="Home"
      
      />
      <MenuLink
        to="/network"
        imageActive="images/activeNetwork.png"
        image="images/network.png"
        title="Network"
      />
      <MenuLink
        to="/jobs"
        imageActive="images/activeJobs.png"
        image="images/jobs.png"
        title="Jobs"
      />
      <MenuLink
        to="/messages"
        imageActive="images/activeMessages.png"
        image="images/messanging.png"
        title="Messaging"
      />
      <MenuLink
        to="/notification"
        imageActive="images/activeNotification.png"
        image="images/notifi.png"
        title="Notifications"
      />
    </div>
  );
}

export default NavLinks;
