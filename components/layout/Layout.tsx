import React from 'react'
import Navbar from '@components/navbar/Navbar'

type Layout = {
  children: React.ReactNode,
};

const Layout = ({ children }:Layout) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>This is the footer</footer>
    </div>
  )
}

export default Layout
