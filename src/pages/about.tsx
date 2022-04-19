import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import HeaderBigText from "../components/text/HeaderBigText"
import BigParagraph from "../components/text/BigParagraph"
import { graphql, useStaticQuery } from "gatsby"

const AboutPage = () => {
  const query = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            born(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="About" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mb-12 md:mb-0">
          <HeaderBigText>
            Hi I'm Emil Privér. Software developer from Varberg, Sweden, I was
            born {query.site.siteMetadata.author.born}
          </HeaderBigText>
          <BigParagraph>
            My works is mainly focused on backend and architecture. But also
            intersted in AI. Most of the stuffs I do at the moment is for
            e-commerce as that is most what I do for work.
          </BigParagraph>
          <BigParagraph>
            I love to explore the tech world, Love reading about tech and
            explore code, systems and stuffs in general.
          </BigParagraph>
          <p className="text-2xl md:text-3xl text-gray-500">
            Now i'm an software developer at{" "}
            <a
              className="underline"
              target="_blank"
              rel="nofollow noopener noreferrer"
              href="https://rivercode.se"
            >
              Rivercode
            </a>{" "}
            in Borås, Sweden
          </p>
        </div>
        <div className="md:pl-24">
          <StaticImage src="../images/profilbild.jpeg" alt="Emil Privér" />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
