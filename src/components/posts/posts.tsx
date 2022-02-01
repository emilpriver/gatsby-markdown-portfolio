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
                          thumbnail
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
