import React from "react"
import {PageProps} from "gatsby"
import Header from "./header";

declare const __PATH_PREFIX__: string

const Layout: React.FC<PageProps> = ({  children }) => {

  return (
    <div className="container mx-auto">
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
