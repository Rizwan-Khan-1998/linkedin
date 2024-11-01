/* eslint-disable react/prop-types */
// components/Post/PostContent.js
import { useState } from "react";
import truncateText from "./truncateText";

function PostContent({ text, limit = 140 }) {
  const [expanded, setExpanded] = useState(false);
  const isTruncated = text.length > limit;
  const truncatedText = truncateText(text, limit);

  return (
    <div className="px-4 py-8">
      <pre className="whitespace-pre-wrap">
        {expanded ? text : truncatedText}
        {isTruncated && (
          <span
            className="text-gray-500 hover:underline cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? " Show less" : "...more"}
          </span>
        )}
      </pre>
    </div>
  );
}

export default PostContent;
