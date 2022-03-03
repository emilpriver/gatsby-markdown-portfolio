import React from "react"
import Header from "./header";
import Footer from "./footer";


const Layout: React.FC = ({  children }) => {

  return (
    <div className="container mx-auto max-w-7xl">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
