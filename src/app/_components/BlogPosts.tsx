import { BlogPost } from './BlogPost'
type BlogPostsProps = {
  posts: {
    id: number
    topic: string
    link: string
    imageUrl: string
    title: string
    author: string
    authorUrl: string
    date: Date
    type: string
  }[]
}

export const BlogPosts = ({ posts }: BlogPostsProps) => {
  return (
    <section className="p-strip">
      <div className="row">
        {posts.map(({ id, ...post }) => (
          <BlogPost className="col-4" key={id} {...post} />
        ))}
      </div>
    </section>
  )
}
