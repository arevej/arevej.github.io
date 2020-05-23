import matter from 'gray-matter'

const glob = require('glob')

export type BlogPost = {
  frontmatter: { [key: string]: any }
  markdownBody: string
  slug: string
}

export async function getAllBlogPostSlugs (): Promise<Array<string>> {
  const blogs = glob.sync('posts/**/*.md')

  const blogSlugs = blogs.map(file =>
    file
      .split('/')[1]
      .replace(/ /g, '-')
      .slice(0, -3)
      .trim()
  )

  return blogSlugs
}

export async function getBlogPostBySlug (slug: string): Promise<BlogPost> {
  const content = await import(`../posts/${slug}.md`)
  const data = matter(content.default)

  return {
    frontmatter: data.data,
    markdownBody: data.content,
    slug
  }
}

export async function getAllBlogPosts (): Promise<Array<BlogPost>> {
  const allSlugs = await getAllBlogPostSlugs()
  const postsPromises = allSlugs.map(getBlogPostBySlug)

  return Promise.all(postsPromises)
}
