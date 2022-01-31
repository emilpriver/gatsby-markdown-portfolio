import React from "react";
import {Link} from "gatsby";

const Header: React.FC = () => {
  return (
      <div className="flex justify-between">
        <h3>Emil Privér</h3>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
        </nav>
      </div>
  )
}

export default  Header
