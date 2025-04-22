import { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starsContainerStyle = {
  display: "flex",
  gap: "1px",
};

const textStyle = {
  lineHeight: "0",
  margin: "0",
};

function StarRating({ maxRating = 5 }) {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    stars.push(
      <Star
        key={i}
        filled={hoverRating ? hoverRating >= i + 1 : currentRating >= i + 1}
        handleStarClick={() => setCurrentRating(i + 1)}
        onStarHover={() => setHoverRating(i + 1)}
        onStarUnHover={() => setHoverRating(0)}
      />
    ); // same thing i can achieve with Array.from
  }

  function getDisplayRating() {
    console.log("Hover Rating:", hoverRating);
    console.log("Current Rating:", currentRating);

    if (hoverRating) return hoverRating;
    if (currentRating) return currentRating;
    return "";
  }

  return (
    <div style={containerStyle}>
      <div style={starsContainerStyle}>{stars}</div>
      <p style={textStyle}>{getDisplayRating()}</p>
    </div>
  );
}

export default StarRating;
