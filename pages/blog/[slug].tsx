import ReactMarkdown from 'react-markdown'
import { GetStaticProps, GetStaticPaths } from "next"

import * as blogData from "../../data-util/blog"
import config from "../../site-config";
import Layout from '../../components/Layout';

type Props = { post: blogData.BlogPost };
const Post = ({ post }: Props) => {
  const siteTitle = config.siteTitle;
  return (
    <div>
      <Layout pageTitle={post.frontmatter.title}>
        <ReactMarkdown source={post.markdownBody} />
      </Layout>

    </div>
  )
}

export default Post;

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({ ...ctx }) => {
  const { slug } = ctx.params
  const post = await blogData.getBlogPostBySlug(slug);

  return {
    props: {
      post,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogSlugs = await blogData.getAllBlogPostSlugs();

  const paths = blogSlugs.map(slug => `/blog/${slug}`)
  return {
    paths,
    fallback: false
  }
}
