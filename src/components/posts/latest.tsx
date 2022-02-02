import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import {Post as PostType} from "../../types/post";
import Post from './post';

const Latest: React.FC = () => {
    const posts = useStaticQuery<{ posts: { nodes: PostType[] } }>(graphql`
        query LatestPosts {
            posts: allMarkdownRemark(
                limit: 4,
                sort: {fields: frontmatter___date, order: DESC}
            ) {
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
                        fromNow: date(fromNow: true, locale: "en")
                        date
                    }
                    excerptPlain: excerpt(format: PLAIN)
                    excerptHtml: excerpt(format: HTML)
                }
            }
        }
    `)

  return (
      <>
          <h2 className="text-4xl mb-4 font-medium">Latest posts on the blog</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {posts?.posts?.nodes?.map((el) => <Post post={el}/>)}
          </div>
      </>
  )
}
export default Latest
