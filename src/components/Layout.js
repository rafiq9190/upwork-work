import React, { useState } from "react"
import Navbar from "./Nav"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {children}
      <Navbar />
    </>
  )
}

export default Layout
