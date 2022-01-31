export type Post = {
  timeToRead: string
  fields: {
    slug: string
  }
  frontmatter: {
    thumbnail: string
    title: string
    description: string
    date: string
    fromNow: string
  }
  htmlAst: string
  html: string
  id: string
  excerpt: string
  excerptPlain: string
  excerptHtml: string
}

