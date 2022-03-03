import React from 'react'

const Footer: React.FC = () => (
    <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a className="underline" href="https://www.gatsbyjs.com">Gatsby</a>
        {' '}
        -
        {' '}
        Hosted on <a className="underline" href="https://www.gatsbyjs.com/products/cloud/"> Gatsby Cloud</a>
    </footer>
)

export default Footer
