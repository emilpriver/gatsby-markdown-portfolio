import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Post} from "../types/post";
import dayjs from "dayjs";
import "prismjs/themes/prism-tomorrow.css";
import HeaderBigText from "../components/text/HeaderBigText";

type Props = {
  data: {
    markdownRemark: Post
    previous: Post
    next: Post
  }
}

const BlogPostTemplate: React.FC<Props> = ({ data }) => {
  const { previous, next, markdownRemark: post } = data

  return (
      <Layout>
        <Seo
            title={post.frontmatter.seoTitle || post.frontmatter.title || ''}
            description={post.frontmatter.description}
            image={post.frontmatter?.cover?.childImageSharp?.original?.src ?? null}
        />
        <div className="max-w-4xl container mx-auto">
          <HeaderBigText>{post.frontmatter.title}</HeaderBigText>
          <span className="mb-6 w-full inline-block">
            <time className="mb-6" dateTime={dayjs(post.frontmatter.date).format("MMMM DD, YYYY")}>
              {post.frontmatter.fromNow}
            </time>
            {' '}
            -
            {' '}
            {post.fields.readingTime.text}
          </span>
          <div className="prose lg:prose-xl mb-12" dangerouslySetInnerHTML={{__html: post.html}} />
          {previous || next ? (
              <div className="w-full flex justify-between items-center flex-wrap mb-12">
                {previous ? <Link className="text-lg mb-2" to={previous.fields.slug}>Previous post: {previous.frontmatter.title}</Link> : null}
                {next ? <Link className="text-lg mb-2" to={next.fields.slug}>Next post: {next.frontmatter.title}</Link> : null}
              </div>
          ) : null}
        </div>
      </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
        html
        htmlAst
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
            fromNow: date(fromNow: true, locale: "en")
            date
            seoTitle
            published
        }
        excerptPlain: excerpt(format: PLAIN)
        excerptHtml: excerpt(format: HTML)
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
