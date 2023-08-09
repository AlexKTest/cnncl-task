import { blogService } from '@/services/blog-service'
import { BlogPosts } from './_components/BlogPosts'
import { getPostsData } from './_utils/data'

export default async function Home() {
  const posts = await blogService.getBlogPosts()
  const postsData = getPostsData(posts)

  return (
    <main>
      <BlogPosts posts={postsData} />
    </main>
  )
}
