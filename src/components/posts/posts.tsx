import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import {Post} from "../../types/post";

const Posts: React.FC = () => {
    const posts = useStaticQuery<{ posts: { nodes: Post[] } }>(graphql`
          query FrontpagePosts {
              posts: allMarkdownRemark(limit: 4) {
                  nodes {
                      timeToRead
                      fields {
                          slug
                          readingTime {
                              words
                              text
                              time
                              minutes
                          }
                      }
                      frontmatter {
                          cover {
                              childImageSharp {
                                  original {
                                      src
                                  }
                                  image: gatsbyImageData(
                                      width: 400
                                      height: 240
                                      webpOptions: {quality: 70}
                                      formats: [AUTO, WEBP, AVIF]
                                      placeholder: BLURRED
                                      quality: 70
                                  )
                              }
                          }
                          title
                          description
                          date(fromNow: true)
                      }
                      excerptPlain: excerpt(format: PLAIN)
                      excerptHtml: excerpt(format: HTML)
                  }
              }
          }
        `,
    )

  return (
      <div className="w-full grid-cols-2 lg:grid-cols-4 gap-4 inline-grid grid-flow-row">
        {posts.posts.nodes.map((el) => (
            <span key={el.id}>{el.frontmatter.title}</span>
        ))}
      </div>
  )
}

export default Posts
