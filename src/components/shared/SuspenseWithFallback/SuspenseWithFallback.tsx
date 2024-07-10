import React from 'react';
import SplashScreen from './SplashScreen';

const SuspenseWithFallback = ({ children }: React.PropsWithChildren) => {
  return (
    <React.Suspense fallback={<SplashScreen />}>{children}</React.Suspense>
  );
};

export default SuspenseWithFallback;
