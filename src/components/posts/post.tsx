import React from 'react'
import {Link} from "gatsby";
import {Post as PostType} from '../../types/post'
import dayjs from "dayjs";

type Post = {
  post: PostType
}

const Post: React.FC<Post> = ({post}) => {
  return (
      <article
          className="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none mb-5 bg-white p-6 rounded-3xl"
          key={post.id}
      >
        <h3 className="mb-4 text-2xl text-gray-900 tracking-tight font-bold">
          <Link to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        </h3>
        <span>
            <time className="mb-6" dateTime={dayjs(post.frontmatter.date).format("MMMM DD, YYYY")}>
              {post.frontmatter.fromNow}
            </time>
          {' '}
          -
          {' '}
          {post.fields.readingTime.text}
          </span>
        <div className="mb-6 markdown">
          <p>{post.excerptPlain}</p>
        </div>
        <div className="mt-auto flex flex-row-reverse items-center justify-end">
          <svg
              width="2"
              height="2"
              fill="currentColor"
              className="mx-4 text-gray-700 lg:hidden"
          >
            <circle cx="1" cy="1" r="1"></circle>
          </svg>
          <Link
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap transition px-3 bg-gray-200 focus:outline-none focus:ring-2 text-gray-700 hover:bg-gray-300 hover:text-gray-900 focus:ring-gray-500"
              to={post.fields.slug}
          >
            Read more<span className="sr-only">, {post.frontmatter.title}</span>
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
          </Link>
        </div>
      </article>
  )
}

export default Post
