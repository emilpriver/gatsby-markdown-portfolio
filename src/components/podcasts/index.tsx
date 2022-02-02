import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import {Podcast as PodcastType} from "../../types/podcast";
import Podcast from './podcast';

const Podcasts: React.FC = () => {
    const data = useStaticQuery<{ podcasts: { nodes: PodcastType[] } }>(graphql`
        query Podcasts {
            podcasts: allMarkdownRemark(filter: {frontmatter: {type: {eq: "podcast"}}}) {
                nodes {
                    id
                    frontmatter {
                        apple
                        google
                        language
                        podcast
                        spotify
                        title
                        description
                        tags
                    }
                }
            }
        }
    `)
    console.log(data)

  return (
      <div className="pb-24">
        <h2 className="text-4xl mb-4 font-medium">Podcasts i've been on</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {data?.podcasts?.nodes.map((el) => <Podcast key={el.id} podcast={el} />)}
        </div>
      </div>
  )
}

export default Podcasts
