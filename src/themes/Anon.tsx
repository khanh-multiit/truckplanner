import React, { ReactNode } from 'react';

interface AnonProps {
  children: ReactNode;
}
const Anon = ({ children }: AnonProps) => {
  return <>Anon</>;
};

export default Anon;
