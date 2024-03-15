import React from "react";

const EaightBall = ({ answer, color }) => {
  return (
    <div className="eightball-container" style={{ backgroundColor: color }}>
      <h5>{answer}</h5>
    </div>
  );
};

export default EaightBall;
