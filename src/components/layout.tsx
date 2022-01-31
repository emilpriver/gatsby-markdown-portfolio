import React from "react"
import Header from "./header";


const Layout: React.FC = ({  children }) => {

  return (
    <div className="container mx-auto max-w-7xl">
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
