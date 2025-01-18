import React from "react";

const AnimatedText = ({ text }) => {
  const letters = text.split("");

  return (
    <div id="load">
      {letters.map((letter, index) => (
        <div
          key={index}
          style={{
            animationDelay: `${index * 0.2}s`,
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
