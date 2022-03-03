import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import SmallArtist from "./smallArtist";
import {SpotifyArtist} from "../../types/spotify";
import SpotifyIcon from "../icons/spotify";
import SpotifyCurrentPlaying from "./currentPlaying";

type SpotifyQuery = {
  spotify: {
    nodes: SpotifyArtist[]
  }
}

const TopArtists: React.FC = () => {
    const data = useStaticQuery<SpotifyQuery>(graphql`
        query MostPlayedSpotifyArtists {
            spotify: allSpotifyTopArtist(filter: {time_range: {eq: "medium_term"}}, limit: 8) {
                nodes {
                    uri
                    time_range
                    external_urls {
                        spotify
                    }
                    image {
                        localFile {
                            id
                            childImageSharp {
                                gatsbyImageData(
                                    width: 96
                                    height: 96
                                    webpOptions: {
                                        quality: 70
                                    }
                                    formats: [AUTO, WEBP, AVIF]
                                    placeholder: DOMINANT_COLOR
                                    quality: 70
                                )
                            }
                        }
                    }
                    name
                    popularity
                }
            }
        }
    `)

  return (
      <>
        <div className="col-span-2 lg:col-span-1">
          <SpotifyCurrentPlaying />
        </div>
        <div className="col-span-2 lg:col-span-3 p-6 bg-white rounded-3xl flex flex justify-between flex-col">
          <div className="w-full flex items-center mb-4">
            <SpotifyIcon className="h-12 w-12 mr-4 fill-spotify" />
            <h3 className="text-xl">Top Played Artists</h3>
          </div>
          <div className="flex flex-wrap justify-between text-spotify">
              {data.spotify.nodes.map((el) => <SmallArtist key={el.uri} artist={el}/>)}
          </div>
        </div>
      </>
  )
}

export default TopArtists
