import React from 'react'
import {SpotifyArtist} from "../../types/spotify";
import {GatsbyImage, getImage, IGatsbyImageData} from "gatsby-plugin-image";

type Props = {
  artist: SpotifyArtist
}

const SmallArtist: React.FC<Props> = ({artist}) => {
    const image = getImage(artist.image.localFile) as IGatsbyImageData

    return (
      <div className="w-24 h-24 block rounded-full mb-4">
        <a href={artist.external_urls.spotify} rel="noreferrer noopener" target="_blank">
            <GatsbyImage className="rounded-full" image={image} alt={artist.name} />
        </a>
      </div>
    )
}

export default SmallArtist
