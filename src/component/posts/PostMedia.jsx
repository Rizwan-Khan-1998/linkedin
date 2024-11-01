/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
export default function Media({ media }) {
    return (
      <>
        {media ? (
          <img
            className="max-h-[400px] w-[100%] object-center"
            src={media}
            alt=""
          />
        ) : null}
      </>
    );
  }