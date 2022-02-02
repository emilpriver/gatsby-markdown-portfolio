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
        <a className="underline" href="https://www.gatsbyjs.com">Gatsby</a>
        {' '}
        -
        {' '}
        Hosted on <a className="underline" href="https://pages.cloudflare.com"> Cloudflare Pages</a>
      </footer>
    </div>
  )
}

export default Layout
