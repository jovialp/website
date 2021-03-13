import { useState, useEffect } from 'react';

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

export default function useWindowIsMobile() {
  const [width, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // return windowDimensions;
  const isMobile = (width <= 768)? true: false;
  return isMobile;
}