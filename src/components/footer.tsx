import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from "dayjs";

dayjs.extend(relativeTime)

const Footer: React.FC = () => {
    const query = useStaticQuery(graphql`
        query {
            site {
                buildTime(fromNow: true)
            }
        }
    `)
    
    return (
        <footer>
            © {new Date().getFullYear()}, Build blazinlgy fast with
            {` `}
            <a className="underline" href="https://www.gatsbyjs.com">Gatsby</a>
            {' '}
            -
            {' '}
            Hosted on <a className="underline" href="https://pages.cloudflare.com/">Cloudflare Pages</a>
            {' '}
            -
            {' '}
            This page was last build {query.site.buildTime}
        </footer>
    )
}

export default Footer
