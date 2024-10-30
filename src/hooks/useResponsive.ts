'use client';
import { useState, useEffect } from 'react';

interface ResponsiveState {
  isMobile: boolean;
  isMobileTablet: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isDesktopHd: boolean;
}

export const useResponsive = (): ResponsiveState => {
  const [responsiveState, setResponsiveState] = useState<ResponsiveState>({
    isMobile: false,
    isMobileTablet: false,
    isTablet: false,
    isDesktop: false,
    isDesktopHd: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setResponsiveState({
        isMobile: width < 390,
        isMobileTablet: width >= 390 && width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024 && width < 1440,
        isDesktopHd: width >= 1440,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return responsiveState;
};
