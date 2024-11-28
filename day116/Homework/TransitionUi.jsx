import React, { useState } from "react";

export default function TransitionUi() {
  const [isRotated, setIsRotated] = useState(false);

  const handleRotation = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div>
      <div
        className={`w-[200px] h-[200px] bg-orange-600 flex items-center justify-center text-white font-semibold cursor-pointer
          transition-transform duration-1000 ease-in-out transform ${isRotated ? "rotate-[360deg]" : ""}`}
        onClick={handleRotation}
      >
        Click to Rotate
      </div>
    </div>
  );
}
