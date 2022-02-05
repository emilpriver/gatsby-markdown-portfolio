import React from 'react'
import {Instagram} from "../../types/instagram";
import {GatsbyImage, getImage, IGatsbyImageData} from "gatsby-plugin-image";

type Props = {
    instagram: Instagram
}

const Picture: React.FC<Props> = ({instagram}) => {
    const image = getImage(instagram.localFile) as IGatsbyImageData

    return (
        <div>
            <GatsbyImage image={image} alt={instagram.username} />
        </div>
    )
}

export default  Picture