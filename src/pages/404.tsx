import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFound = () => {
  return (
      <Layout>
        <Seo title="404: Not Found" />
        <div className="text-center">
          <h1>404: Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <p className="underline"><Link to="/">Go back home</Link></p>
        </div>
      </Layout>
  )
}

export default NotFound
