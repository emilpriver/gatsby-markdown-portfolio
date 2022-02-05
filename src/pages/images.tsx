import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {graphql, useStaticQuery} from "gatsby";
import {Instagram} from "../types/instagram";
import Picture from "../components/instagram/picture";
import HeaderBigText from "../components/text/HeaderBigText";
import BigParagraph from "../components/text/BigParagraph";

type InstagramQuery = {
    instagram: {
        nodes: Instagram[]
    }
}

const Images = () => {
    const data = useStaticQuery<InstagramQuery>(graphql`
        query InstagramImages {
          instagram: allInstagramContent(
            limit: 10000
            sort: {fields: timestamp, order: DESC}
          ) {
            nodes {
              media_url
              username
              media_type
              media_id
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, quality: 90)
                }
              }
            }
          }
        }
    `)
    return (
        <Layout>
            <Seo title="Images" />
            <HeaderBigText>Some of my life in pictures.</HeaderBigText>
            <BigParagraph>I wanted to create something like VSCO for my own page. This is what I developed. My goal is to add as much images as possible whenever I am able to</BigParagraph>
            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    350: 1,
                    750: 2,
                    900: 3,
                    1050: 4
                }}
            >
                <Masonry gutter="10px">
                    {data?.instagram?.nodes?.map((el) => (
                        <Picture key={el.media_id} instagram={el} />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </Layout>
    )
}

export default Images



