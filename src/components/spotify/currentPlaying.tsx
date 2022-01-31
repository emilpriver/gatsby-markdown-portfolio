import React from 'react'
import useSwr from 'swr'
import {SpotifyCurrentPlaying as SpotifyCurrentPlayingType} from '../../types/spotify'
import SpotifyIcon from "../icons/spotify";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const fetcher = () => fetch('https://spotify-list-most-played-songs.emilpriver.workers.dev/playing')
    .then((r) => r.json() as Promise<SpotifyCurrentPlayingType>)

const SpotifyCurrentPlaying: React.FC = () => {
  const {data, error} = useSwr('/api/spotify/playing', fetcher)

  return (
      <div className="col-span-1 p-6 bg-white rounded-3xl min-h-64 flex justify-between flex-col">
        <div className="w-full flex items-center mb-2">
          <SpotifyIcon className="h-12 w-12 mr-4 fill-spotify"/>
        </div>
        <div>
          {data && !error ? (
              <>
                <span className="text-spotify mb-4"> Now Playing </span>
                <a href={data?.item.external_urls.spotify} target="_blank" rel="noopener noreferrer nofollow">
                  <h3 className="text-xl">{data?.item.name}</h3>
                  <span>{data?.item.artists.map((el) => el.name)}</span>
                </a>
              </>
          ) :  <Skeleton count={3} />}
        </div>
      </div>
  )
}

export default SpotifyCurrentPlaying
