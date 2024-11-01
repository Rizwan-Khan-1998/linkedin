
import {  useState, useRef, useEffect } from "react"; 
export default function PostModal() {
    const contentRef = useRef(null); // Ref for both input and textarea
    const [content, setContent] = useState(""); // Track comment content
    const [isTyping, setIsTyping] = useState(false); // Switch between input and textarea
    console.log(content);
    console.log(contentRef.current);
    function handleContent(e) {
      const text = e.target.value;
      setContent(text); // Update content
      setIsTyping(text !== "");
    }
    useEffect(() => {
      console.log(contentRef.current.offsetHeight);
    });
    return (
      <div className="p-6 gap-4 flex flex-col">
        
          
            <div className="flex gap-4 w-fit hover:bg-[#f2f2eb]  px-4 py-2 rounded-[12px] cursor-pointer">
            <img
              src="images/profile-pic.png"
              alt=""
              className="w-14 h-14 rounded-full "
            />
            
              <div className="">
                <h1 className="text-lg font-semibold  gap-2">
                  Rizwan Khan
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="caret-medium"
                    aria-hidden="true"
                    role="none"
                    data-supported-dps="24x24"
                    fill="#787777"
                    className="w-6 h-6 inline"
                  >
                    <path d="M12 16L5 9h14z"></path>
                  </svg>
                </h1>
             
              <p className="text-sm text-gray-500 w-auto">Post to Anyone</p>
            
            </div>
          
        </div>
        <div className="">
          <textarea
            placeholder="What do you want to talk about?"
            style={{ resize: "none" }}
            ref={contentRef}
            onChange={(e) => handleContent(e)}
            className="border-none outline-none w-full min-h-[300px]"
            value={content}
          ></textarea>
        </div>
        <div className="px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="emoji-medium"
            aria-hidden="true"
            role="none"
            data-supported-dps="24x24"
            fill="rgba(0, 0, 0, 0.7)"
            className="write-action--img"
          >
            <path d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z"></path>
          </svg>
        </div>
  
        <div className="flex gap-8 items-center ">
          <div className="flex items-center justify-center gap-2 py-1 px-3 border rounded-full border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="signal-ai-small"
              aria-hidden="true"
              role="none"
              data-supported-dps="16x16"
              fill="#e9874c"
              className="w-4 h-4"
            >
              <path d="M15 7.99c0 .39-.28.7-.65.74-2.94.32-5.29 2.68-5.62 5.62-.04.37-.36.65-.73.65h-.01c-.37 0-.69-.28-.73-.65-.32-2.94-2.68-5.29-5.62-5.62A.735.735 0 01.99 8c0-.39.28-.7.65-.74 2.94-.32 5.29-2.68 5.61-5.61.04-.37.36-.65.73-.65H8c.37 0 .69.28.73.65.32 2.94 2.68 5.29 5.62 5.62.37.04.65.36.65.73z"></path>
            </svg>
            <p className="text-gray-800 text-sm">Rewrite with AI</p>
          </div>
  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="image-medium"
            aria-hidden="true"
            role="none"
            data-supported-dps="24x24"
            fill="#787777"
            className="write-action--img"
          >
            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="calendar-medium"
            aria-hidden="true"
            role="none"
            data-supported-dps="24x24"
            fill="#787777"
            className="write-action--img"
          >
            <path d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3H3zm13 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v9zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="starburst-medium"
            aria-hidden="true"
            role="none"
            data-supported-dps="24x24"
            fill="#787777"
            className="write-action--img"
          >
            <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="add-medium"
            aria-hidden="true"
            role="none"
            data-supported-dps="24x24"
            fill="#787777"
            className="write-action--img"
          >
            <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
          </svg>
        </div>
        <div className="flex">
          <button
            className={`flex items-center justify-center bg-blue-600 ml-auto text-white px-6 py-2 text-sm justify-end  font-semibold rounded-full ${
              !isTyping ? "bg-[#f2f2eb] text-[#787777] cursor-no-drop" : ""
            }`}
            disabled={!isTyping}
            onClick={() => console.log("clicked")}
          >
            Post
          </button>
        </div>
      </div>
    );
  }