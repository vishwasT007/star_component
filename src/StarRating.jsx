import { useState } from "react";

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

function StarRating({ maxRating = 5, message = [] }) {
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
    if (message && message.length === maxRating) {
      const index = hoverRating ? hoverRating - 1 : currentRating - 1;
      return index >= 0 ? message[index] : "";
    }
    return hoverRating || currentRating || "";
  }

  return (
    <div style={containerStyle}>
      <div style={starsContainerStyle}>{stars}</div>
      <p style={textStyle}>{getDisplayRating()}</p>
    </div>
  );
}

const starStyle = {
  display: "block",
  cursor: "pointer",
};

function Star({ filled, handleStarClick, onStarHover, onStarUnHover }) {
  return (
    <span
      role="button"
      style={starStyle}
      onClick={handleStarClick}
      onMouseEnter={onStarHover}
      onMouseLeave={onStarUnHover}
    >
      {!filled ? <EmptyStarIcon /> : <FilledStarIcon />}
    </span>
  );
}

function EmptyStarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-star"
      viewBox="0 0 16 16"
    >
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
    </svg>
  );
}

function FilledStarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
}

export default StarRating;
