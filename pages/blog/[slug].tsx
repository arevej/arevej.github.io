import ReactMarkdown from 'react-markdown'
import { GetStaticProps, GetStaticPaths } from 'next'

import * as blogData from '../../data-util/blog'
import { Colors } from '../../components/constants'
import { PostLayout } from '../../components/PostLayout'

type Props = { post: blogData.BlogPost }
const Post = ({ post }: Props) => {
  return (
    <PostLayout pageTitle={`TK: ${post.frontmatter.title}`}>
      <h3>{post.frontmatter.title}</h3>
      <div className='text'>
        <ReactMarkdown escapeHtml={false} source={post.markdownBody} />
      </div>

      <style jsx global>{`
        .text {
          font-family: 'Titillium Web', sans-serif;
          font-size: 22px;
        }

        .text h2 {
          font-size: 30px;
        }

        .text h3 {
          font-size: 26px !important;
        }

        .text ul {
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .text p:first-of-type {
          margin-top: 0;
        }

        .text a {
          color: ${Colors.yellow};
        }

        .text code {
          background: ${Colors.grey};
        }

        .language-python {
          display: block;
        }

        .text img {
          display: block;
          margin: 0 auto;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .language-python {
            font-size: 2.5vw;
          }
        }
      `}</style>
    </PostLayout>
  )
}

export default Post

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  ...ctx
}) => {
  const { slug } = ctx.params
  const post = await blogData.getBlogPostBySlug(slug)

  return {
    props: {
      post
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogSlugs = await blogData.getAllBlogPostSlugs()

  const paths = blogSlugs.map(slug => `/blog/${slug}`)
  return {
    paths,
    fallback: false
  }
}
