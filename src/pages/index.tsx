import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import TopArtists from "../components/spotify/topArtists";
import Latest from "../components/posts/latest";

type DataProps = {}

const HomePage: React.FC<PageProps<DataProps>> = () => (
  <Layout>
    <Seo title="Home" />
    <div className="pb-24 grid md:auto-rows-fr grid-cols-2 lg:grid-cols-4 gap-4">
      <Hero />
      <TopArtists />
    </div>
    <div>
      <Latest />
    </div>
  </Layout>
)

export default HomePage
