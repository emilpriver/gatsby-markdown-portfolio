import React from 'react'
import {SpotifyArtist} from "../../types/spotify";
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = {
  artist: SpotifyArtist
}

const SmallArtist: React.FC<Props> = ({artist}) => {
  console.log(artist)
  const [_, image] = artist.images
  return (
    <div className="w-24 h-24 block rounded-full mb-4">
      <a href={artist.external_urls.spotify} rel="noreferrer noopener" target="_blank">
        <LazyLoadImage className="rounded-full w-24 h-24" height={200} width={200} src={image?.url} alt={artist.name}  effect="opacity" />
      </a>
    </div>
  )
}

export default SmallArtist
