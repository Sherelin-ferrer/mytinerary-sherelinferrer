import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function EstandardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar className="shrink-0" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
