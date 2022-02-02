import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import SmallArtist from "./smallArtist";
import {SpotifyArtist} from "../../types/spotify";
import SpotifyIcon from "../icons/spotify";
import SpotifyCurrentPlaying from "./currentPlaying";

type SpotifyQuery = {
  spotify: {
    nodes: {
      items: SpotifyArtist[]
    }[]
  }
}

const TopArtists: React.FC = () => {
    const data = useStaticQuery<SpotifyQuery>(graphql`
        query MostPlayedSpotifyArtists {
            spotify: allSpotify(limit: 8)  {
                nodes {
                    items {
                        external_urls {
                            spotify
                        }
                        images {
                            height
                            url
                            width
                        }
                        uri
                        type
                        name
                        popularity
                        id
                        href
                        genres
                        followers {
                            total
                        }
                    }
                }
            }
        }
    `)
  console.log(data.spotify)
  const [node] = data.spotify?.nodes ?? []

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
            {node.items?.map((el) => <SmallArtist key={el.uri} artist={el}/>)}
          </div>
        </div>
      </>
  )
}

export default TopArtists
