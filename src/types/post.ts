export type Post = {
  timeToRead: string
  fields: {
    slug: string
    readingTime: {
      words: string
      text: string
      time: string
      minutes: string
    }
  }
  frontmatter: {
    thumbnail: string
    title: string
    seoTitle: string
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

