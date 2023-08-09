import { BlogPost } from '@/services/blog-service'

export const getPostsData = (posts: BlogPost[]) => {
  return posts.map(post => {
    const topics = post._embedded['wp:term'].find(
      terms => terms[0] && terms[0].taxonomy === 'topic'
    )
    const topic = topics ? topics[0] : null
    const categories = post._embedded['wp:term'].find(
      terms => terms[0] && terms[0].taxonomy === 'category'
    )
    const category = categories ? categories[0] : null
    return {
      id: post.id,
      topic: topic?.name || 'N/A',
      link: post.link,
      imageUrl: post.featured_media,
      title: post.title.rendered,
      author: post._embedded.author[0].name,
      authorUrl: post._embedded.author[0].link,
      date: new Date(post.date),
      type: category?.name || 'N/A',
    }
  })
}
