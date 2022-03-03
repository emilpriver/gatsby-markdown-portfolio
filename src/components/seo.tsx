import React from "react"
import { Helmet } from "react-helmet"
import {useStaticQuery, graphql} from "gatsby"

type Props = {
  description?: string
  lang?: string
  meta?: Array<HTMLMetaElement>
  title?: string
  image?: string
}

const Seo: React.FC<Props> = ({ description, lang = 'en', meta, title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const ogImage = image ?? '/images/profilbild.jpeg'


  return (
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:image`,
            content: ogImage
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata?.social?.twitter || ``,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:image`,
            content: image,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta ?? [])}
      />
    )
}

export default Seo
