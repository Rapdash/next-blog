import React from 'react';
import { Navbar } from '../Navbar';

export const Layout = ({ children }) => (
  <>
    <Navbar />
    <section style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {children}
    </section>
  </>
);
