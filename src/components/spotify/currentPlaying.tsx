import React from 'react'
import useSwr from 'swr'
import {SpotifyCurrentPlaying as SpotifyCurrentPlayingType} from '../../types/spotify'
import SpotifyIcon from "../icons/spotify";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const fetcher = () => fetch('https://spotify-list-most-played-songs.emilpriver.workers.dev/playing')
    .then((r) => r.json() as Promise<SpotifyCurrentPlayingType>)

const SpotifyCurrentPlaying: React.FC = () => {
  const {data, error, isValidating} = useSwr('/api/spotify/playing', fetcher)

  return (
      <div className="col-span-1 p-6 bg-white rounded-3xl min-h-64 flex justify-between flex-col">
        <div className="w-full flex items-center mb-2">
          <SpotifyIcon className="h-12 w-12 mr-4 fill-spotify"/>
        </div>
        <div>
          {data && data?.is_playing && !error ? (
              <>
                <span className="text-spotify mb-4"> Now Playing a {data?.currently_playing_type} </span>
                  {data?.currently_playing_type === "track" && (
                   <a href={data?.item.external_urls.spotify} target="_blank" rel="noopener noreferrer nofollow">
                       <h3 className="text-xl">{data?.item.name}</h3>
                      <span>{data?.item.artists.map((el, index) => `${el.name}${(index + 1) !== data.item.artists?.length ? ', ': ''}`)}</span>
                   </a>
                  )}
              </>
          ) :  (
              <>
                {!isValidating ? (
                    <span className="text-red-600 mb-4"> Not currently playing</span>
                ) : <Skeleton count={3} />}
              </>
          )}
        </div>
      </div>
  )
}

export default SpotifyCurrentPlaying
