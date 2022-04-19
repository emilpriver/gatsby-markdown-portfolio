import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer>
            © {new Date().getFullYear()}, Build blazinlgy fast with
            {` `}
            <a className="underline" href="https://www.gatsbyjs.com">Gatsby</a>
            {' '}
            -
            {' '}
            Hosted on <a className="underline" href="https://pages.cloudflare.com/">Cloudflare Pages</a>
        </footer>
    )
}

export default Footer
