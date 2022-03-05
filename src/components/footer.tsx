import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from "dayjs";

dayjs.extend(relativeTime)

const Footer: React.FC = () => {
    const query = useStaticQuery(graphql`
        query {
            site {
                buildTime
            }
        }
    `)


    const date = dayjs().from(dayjs(query.site.buildTime))

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
            This page was last build {date}
        </footer>
    )
}

export default Footer
