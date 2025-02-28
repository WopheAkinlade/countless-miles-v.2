import React from "react";

const Button = ({ transparent, noBorder, label, onClick, buttonStyle }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      style={{
        backgroundColor: transparent && "none",
        border: noBorder && "none",
        ...buttonStyle
      }}
    >
      {label}
    </button>
  );
};

export default Button;
