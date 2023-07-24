import React, { useState, useEffect } from "react";

export const useLess = (windowWidth) => {
  const [isSmallButton, setButtonState] = useState(window.innerWidth < windowWidth)

  useEffect(() => {
    const handleResize = (event) => {
      setButtonState(event.target.innerWidth < windowWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallButton;
}