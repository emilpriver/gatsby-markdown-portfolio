if(process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: '.env'
  })
}

module.exports = {
  siteMetadata: {
    title: `Emil Privér`,
    author: {
      name: `Emil Privér`,
      summary: `who lives and works in Varberg, Sweden building useful things.`,
    },
    description: `Software developer with focus backend, love tech, serverless, distributed systems and trying new stuffs`,
    siteUrl: `https://priver.se`,
    social: {
      twitter: `emil_priver`,
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/podcast`,
        name: `podcast`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: true,
              quality: 90,
              withWebp: true,
              withAvif: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-reading-time`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                 filter: {frontmatter: {published: {eq: true}, type: {eq: "blog"}}}
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Emil Privér",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emil Privér websites`,
        short_name: `Emil Privér`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
      {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://spotify-list-most-played-songs.emilpriver.workers.dev/top?type=artists&time_range=medium_term&limit=8",
        rootKey: "spotify",
        imageKeys: ["images"],
        schemas: {
          spotify: `
            items: [item]
          `,
          item:`
            external_urls: external
            images: [images] 
            uri: String
            type: String
            name: String
            popularity: Int
            id: String
            href: String
            genres: [String]
            followers: followers
          `,
          followers: `
            total: Int
          `,
          images: `
            height: Int
            url: String
            width: Int
          `,
          external: `
            spotify: String
          `
        }
      }
    },
    `gatsby-plugin-sitemap`,
  ],
}
