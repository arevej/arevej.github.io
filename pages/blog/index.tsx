import { GetStaticProps } from "next"
import * as blogData from "../../data-util/blog"
import { PostLayout } from "../../components/PostLayout"
import PostLink from "../../components/PostLink";



type Props = {
  allPosts: Array<blogData.BlogPost>;
};
export default function Blog(props: Props) {
  return (
    <PostLayout pageTitle='TK Blog'>
      <h3>Python/Django</h3>
      {props.allPosts.map(post => (
        <PostLink
          postSlug={post.slug}
          text={post.frontmatter.title}
        />
      ))}
    </PostLayout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await blogData.getAllBlogPosts();

  return {
    props: {
      allPosts: posts,
    }
  }
}
