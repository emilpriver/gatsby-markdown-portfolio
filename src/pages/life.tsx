import React from "react"
import Seo from "../components/seo"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {graphql, useStaticQuery} from "gatsby";
import {Instagram} from "../types/instagram";
import Picture from "../components/instagram/picture";
import HeaderBigText from "../components/text/HeaderBigText";
import BigParagraph from "../components/text/BigParagraph";
import InstagramVideo from "../components/instagram/video";
import Header from "../components/header";
import Footer from "../components/footer";

type InstagramQuery = {
    instagram: {
        nodes: Instagram[]
    }
}

const Life = () => {
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
                  gatsbyImageData(
                      layout: CONSTRAINED,
                      placeholder: DOMINANT_COLOR,
                      quality: 90
                  )
                }
              }
            }
          }
        }
    `)

    return (
        <>
            <div className="container mx-auto max-w-7xl">
                <Header/>
                <Seo title="Life"/>
                <HeaderBigText>Some of my life in media.</HeaderBigText>
                <BigParagraph>I wanted to create something like VSCO for my own page. This is what I developed. My goal
                    is to add as much images as possible whenever I am able to</BigParagraph>
            </div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    350: 1,
                    750: 2,
                    900: 3,
                    1050: 4
                }}
            >
                <Masonry gutter="20px">
                    {data?.instagram?.nodes?.map((el) => {
                        if (el.media_type === "VIDEO") {
                            return (
                                <InstagramVideo key={el.media_id} instagram={el}/>
                            )
                        }

                        if (el.media_type === "IMAGE") {
                            return (
                                <Picture key={el.media_id} instagram={el}/>
                            )
                        }
                    })}
                </Masonry>
            </ResponsiveMasonry>
            <Footer />
        </>
    )
}

export default Life



