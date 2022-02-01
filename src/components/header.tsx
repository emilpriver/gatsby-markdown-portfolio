import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

const Header: React.FC = () => {
  return (
      <div className="flex justify-between py-12 items-center">
        <div>
          <Link to="/" className="mr-4 text-lg text-hero-dark">
            <StaticImage src="../images/favicon.png" alt="Emil Privér" width={50} height={50}/>
          </Link>
        </div>
        <nav>
          <Link to="/" className="mr-4 text-lg text-hero-dark">Home</Link>
          <Link to="/about" className="text-lg text-hero-dark">About</Link>
        </nav>
      </div>
  )
}

export default  Header
