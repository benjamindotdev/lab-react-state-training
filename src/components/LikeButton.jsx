import { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  return (
    <button type="button" onClick={() => setLikes(likes + 1)}>
      {likes} likes
    </button>
  );
};

export default LikeButton;
