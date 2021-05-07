import React, { ReactNode } from 'react';

interface AnonProps {
  children: ReactNode;
}
const Anon = ({ children }: AnonProps) => {
  return <>{children}</>;
};

export default Anon;
