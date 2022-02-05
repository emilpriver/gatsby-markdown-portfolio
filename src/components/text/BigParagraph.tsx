import React from 'react'

const BigParagraph: React.FC = ({children}) => (
    <p className="text-2xl md:text-3xl text-gray-500 mb-12">{children}</p>
)
export default BigParagraph