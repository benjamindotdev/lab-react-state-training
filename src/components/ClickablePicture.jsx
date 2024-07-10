import { useState } from "react";

const ClickablePicture = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <img
      onClick={() => setIsClicked(!isClicked)}
      src={
        isClicked
          ? "src/assets/images/maxence-glasses.png"
          : "src/assets/images/maxence.png"
      }
    ></img>
  );
};

export default ClickablePicture;
