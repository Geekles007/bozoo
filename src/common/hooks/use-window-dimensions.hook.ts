// create a hook to get the window dimensions
import {useEffect, useState} from "react";

export interface IDimension {
    width: number;
    height: number;
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<IDimension>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
