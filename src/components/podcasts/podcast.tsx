import React from 'react'
import {Podcast as PodcastType} from "../../types/podcast";

const Podcast: React.FC<{ podcast: PodcastType }> = ({podcast}) => {
  return (
      <div className="bg-white p-4 rounded-3xl">
        <h3 className="mb-4 text-xl text-gray-900 tracking-tight font-medium">
          {podcast.frontmatter.podcast}
          {' '}
          :
          {' '}
          {podcast.frontmatter.title}
        </h3>
        <p>{podcast.frontmatter.description}</p>
        <span className="mr-2 w-full block">Tags: {podcast.frontmatter.tags.map((el, index) => `${el}${index + 1 !== podcast.frontmatter.tags?.length ? ', ' : ''}`)}</span>
        <span className="mb-4 w-full mr-2 block">Published in: {podcast.frontmatter.language}</span>
        <div className="flex flex-wrap">
          {podcast.frontmatter.spotify ? (
            <a
              className="group inline-flex mr-2 mb-2 items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap transition px-3 bg-gray-200 focus:outline-none focus:ring-2 text-gray-700 hover:bg-gray-300 hover:text-gray-900 focus:ring-gray-500"
              href={podcast.frontmatter.spotify}
            >
              Listen on Spotify
              <svg
                className="overflow-visible ml-3 text-gray-300 group-hover:text-gray-400"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0L3 3L0 6"></path>
              </svg>
            </a>
          ) : null}
          {podcast.frontmatter.apple ? (
            <a
              className="group inline-flex mr-2 mb-2 items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap transition px-3 bg-gray-200 focus:outline-none focus:ring-2 text-gray-700 hover:bg-gray-300 hover:text-gray-900 focus:ring-gray-500"
              href={podcast.frontmatter.apple}
            >
              Listen on Apple Podcast
              <svg
                className="overflow-visible ml-3 text-gray-300 group-hover:text-gray-400"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0L3 3L0 6"></path>
              </svg>
            </a>
          ) : null}
          {podcast.frontmatter.google ? (
            <a
              className="group inline-flex mr-2 mb-2 items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap transition px-3 bg-gray-200 focus:outline-none focus:ring-2 text-gray-700 hover:bg-gray-300 hover:text-gray-900 focus:ring-gray-500"
              href={podcast.frontmatter.google}
            >
              Listen on Google Podcast
              <svg
                className="overflow-visible ml-3 text-gray-300 group-hover:text-gray-400"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0L3 3L0 6"></path>
              </svg>
            </a>
            ) : null}
        </div>
      </div>
  )
}

export default Podcast
