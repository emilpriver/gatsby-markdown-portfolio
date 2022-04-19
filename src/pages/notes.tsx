import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {graphql, useStaticQuery} from "gatsby";
import HeaderBigText from "../components/text/HeaderBigText";
import BigParagraph from "../components/text/BigParagraph";
import {Post as PostType} from "../types/post";
import Post from "../components/posts/post";


const Images = () => {
    const posts = useStaticQuery<{ posts: { nodes: PostType[] } }>(graphql`
        query AllNotes {
            posts: allMarkdownRemark(
                filter: {frontmatter: {published: {eq: true}, type: {eq: "blog"}}}
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
                                    placeholder: DOMINANT_COLOR
                                    quality: 70
                                )
                            }
                        }
                        title
                        description
                        fromNow: date(fromNow: true, locale: "en")
                        date: date(formatString: "MMMM DD, YYYY")
                    }
                    excerptPlain: excerpt(format: PLAIN)
                    excerptHtml: excerpt(format: HTML)
                }
            }
        }
    `)

    return (
        <Layout>
            <Seo title="Notes" />
            <HeaderBigText>Notes</HeaderBigText>
            <BigParagraph>This page contains life notes, blogs, tutorials and more i've written during the years</BigParagraph>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {posts?.posts?.nodes?.map((el) => <Post post={el}/>)}
            </div>
        </Layout>
    )
}

export default Images



