/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { UserContext } from "../../contextApi/context";

function WritePostModal({ show, handleOpen, handleClose }) {
  const modalRef = useRef(null);
  const closeModal = (e) => {
    if (modalRef.current == e.target) {
      handleClose();
    }
  };

  if (!show) return null;
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="modal-overlays absolute top-0 left-0 max-w-screen w-screen h-screen z-10 bg-black bg-opacity-50"
    >
      <div className="absolute share-box h-[60vh] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2  flex items-center justify-center max-w-[744px] w-screen bg-white rounded-lg">
        <h1>i am a Modal</h1>
        <button onClick={handleClose}>close</button>
      </div>
    </div>
  );
}

function TopRowOfWritePost({ handleOpen }) {
  const { profilePic } = useContext(UserContext);
  return (
    <div className="flex items-center px-4 py-2 gap-4">
      <img className="rounded-full w-12 h-12 " src={profilePic} alt="" />
      <button
        className="grow border-2 border-gray-200 flex items-center justify-start px-4 rounded-[35px] hover:bg-[#f3f2ee] h-12"
        type="button"
        onClick={handleOpen}
      >
        Start a Post, try writing with AI
      </button>
    </div>
  );
}

function BottomRowOfWritePost() {
  return (
    <div className="grid grid-cols-3">
      <button type="button " className="bottom-row-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="image-medium"
          aria-hidden="true"
          role="none"
          data-supported-dps="24x24"
          fill="#378fe9"
          className="w-6 h-6 "
        >
          <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
        </svg>
        Media
      </button>
      <button type="button" className="bottom-row-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="calendar-medium"
          aria-hidden="true"
          role="none"
          data-supported-dps="24x24"
          fill="#bf7933"
          className="w-6 h-6"
        >
          <path d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3H3zm13 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v9zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
        </svg>
        Event
      </button>
      <button type="button" className="bottom-row-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="content-align-left-medium"
          aria-hidden="true"
          role="none"
          data-supported-dps="24x24"
          fill="#e16846"
          className="w-6 h-6"
        >
          <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
        </svg>
        Write article
      </button>
    </div>
  );
}

function WritePostContainer() {
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className=" bg-white rounded-xl border-2 border-gray-200 py-2">
      <TopRowOfWritePost handleOpen={handleOpen} />
      <BottomRowOfWritePost />
      {createPortal(
        <WritePostModal
          show={show}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />,
        document.body
      )}
    </div>
  );
}

export default WritePostContainer;
