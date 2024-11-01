// helpers/truncateText.js
function truncateText(text, limit) {
    if (text.length <= limit) return text;
    const truncated = text.substring(0, limit);
    const lastSpaceIndex = truncated.lastIndexOf(" ");
    return lastSpaceIndex !== -1 ? truncated.substring(0, lastSpaceIndex) : truncated;
  }
  
  export default truncateText;
  