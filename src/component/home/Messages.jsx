/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Messages() {
  return (
    <div>
      <TopHeadMessges />;
    </div>
  );
}

function TopHeadMessges() {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div className={` transition-all duration-500 ease-in-out flex flex-col fixed bottom-0 right-[5%] rounded-t-lg border  border-gray-300 p-2 bg-white `}>
      <div
        className=" flex items-center gap-20"
        onClick={handleToggle}
      >
        <div className="flex items-center gap-2">
          <img
            className="rounded-full w-8 h-8"
            src="images/profile-pic.png"
            alt=""
          />
          <p className="text-[14px] font-semibold">Messaging</p>
        </div>

        <div className="flex gap-4">
          <img src="images/three-dot.svg" alt="" className="w-4 h-4" />
          <img src="images/msg-write.svg" alt="" className="w-4 h-4" />
          <img src="images/msg-open.svg" alt="" className="w-4 h-4" />
        </div>
      </div>
      {toggle ? <MessageBoxes /> : ""}
    </div>
  );
}

function MessageBoxes() {
  return <div className="h-[500px] "></div>;
}
