'use client';

import { useState, useEffect } from 'react';

export interface Dimension {
  width: number;
  height: number;
}

export const useWindowDimensions = (): Dimension | null => {
  const [dimension, setDimension] = useState<Dimension>();

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (dimension) {
    return dimension;
  }

  return null;
};

export default useWindowDimensions;
