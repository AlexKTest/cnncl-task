// TODO - Could be moved to the env file in case of real API url usage
const BLOG_POSTS_URL =
  'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json'

interface Author {
  id: number
  name: string
  link: string
}

interface Category {
  id: number
  name: string
  taxonomy: 'category'
}

interface Topic {
  id: number
  name: string
  taxonomy: 'topic'
}

export interface BlogPost {
  id: number
  featured_media: string
  link: string
  title: {
    rendered: string
  }
  date: string
  _embedded: {
    author: Author[]
    'wp:term': [Category[] | Topic[]]
  }
}

const getBlogPosts = async () => {
  const res = await fetch(BLOG_POSTS_URL)
  return res.json() as Promise<BlogPost[]>
}

export const blogService = {
  getBlogPosts,
}
