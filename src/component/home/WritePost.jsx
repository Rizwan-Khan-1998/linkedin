/* eslint-disable react/prop-types */
import { useContext, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { UserContext } from "./context.js";
import PostModal from "./PostModal.jsx";

function Media() {
  return <>media</>;
}



function Event() {
  return <>event</>;
}

function Article() {
  return <>article</>;
}

function WritePost({ show, handleClose, content }) {
  const modalRef = useRef(null);
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      handleClose();
    }
  };
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const renderContent = () => {
    switch (content) {
      case "post":
        return <PostModal />;
      case "media":
        return <Media />;
      case "article":
        return <Article />;
      case "event":
        return <Event />;
      default:
        return null;
    }
  };

  if (!show) return null;
  return createPortal(
    <div
      ref={modalRef}
      onClick={closeModal}
      className="modal-overlays absolute top-0 left-0 w-screen h-screen z-10 bg-black bg-opacity-50"
    >
      <div className=" max-w-[744px] w-screen bg-white rounded-lg mx-auto mt-12">
        {renderContent()}
      </div>
    </div>,
    document.body
  );
}

function TopRowOfWritePost({ handleOpen }) {
  const { profilePic } = useContext(UserContext);
  return (
    <div className="flex items-center px-4 py-2 gap-4">
      <img className="rounded-full w-12 h-12" src={profilePic} alt="" />
      <button
        className="grow border-2 border-gray-200 flex items-center justify-start px-4 rounded-[35px] hover:bg-[#f3f2ee] h-12"
        type="button"
        onClick={() => handleOpen("post")}
      >
        Start a Post, try writing with AI
      </button>
    </div>
  );
}

function BottomRowOfWritePost({ handleOpen }) {
  return (
    <div className="grid grid-cols-3">
      <button onClick={() => handleOpen("media")} className="bottom-row-button">
        Media
      </button>
      <button onClick={() => handleOpen("event")} className="bottom-row-button">
        Event
      </button>
      <button
        onClick={() => handleOpen("article")}
        className="bottom-row-button"
      >
        Write article
      </button>
    </div>
  );
}

function WritePostContainer() {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");

  const handleOpen = (contentType) => {
    setContent(contentType);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 py-2">
      <TopRowOfWritePost handleOpen={handleOpen} />
      <BottomRowOfWritePost handleOpen={handleOpen} />
      {show && (
        <WritePost
          show={show}
          handleClose={handleClose}
          content={content}
        />
      )}
    </div>
  );
}

export default WritePostContainer;
