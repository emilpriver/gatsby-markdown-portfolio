import React from 'react'
import {graphql, useStaticQuery} from "gatsby";

const Footer: React.FC = () => {
    const query = useStaticQuery(graphql`
        query {
            site {
                buildTime(fromNow: true)
            }
        }
    `)

    console.log(query)

    return (
        <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a className="underline" href="https://www.gatsbyjs.com">Gatsby</a>
            {' '}
            -
            {' '}
            Hosted on <a className="underline" href="https://www.gatsbyjs.com/products/cloud/"> Gatsby Cloud</a>
            {' '}
            -
            {' '}
            This page was last build {query.site.buildTime}
        </footer>
    )
}

export default Footer
