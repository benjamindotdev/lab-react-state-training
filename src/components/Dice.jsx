import { useState } from "react";

const Dice = () => {
  const [dice, setDice] = useState(1);
  const [isRolled, setIsRolled] = useState(false);
  const handleClick = () => {
    setIsRolled(false);
    setTimeout(() => {
      setDice(Math.floor(Math.random() * 6) + 1);
      setIsRolled(true);
    }, 1000);
  };
  return (
    <img
      className="dice"
      src={
        isRolled
          ? `src/assets/images/dice${dice}.png`
          : "src/assets/images/dice-empty.png"
      }
      onClick={handleClick}
    ></img>
  );
};

export default Dice;
