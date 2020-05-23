import { GetStaticProps } from "next"
import Link from 'next/link'

import * as blogData from "../../data-util/blog"
import Layout from '../../components/Layout'
import { Colors } from "../constants"

const PostLink = ({ postSlug, text }: { postSlug: string, text: string }) => {
  return (
    <Link href={`/blog/${postSlug}`}>
      <a className='post-link'>
        {text}

        <style jsx>{`
        .post-link {
          color: ${Colors.blue};
          font-size: 24px;
          padding: 3px 0;
        }

        .post-link:hover {
          color: ${Colors.yellow};
          transition: all 0.3s;
        }
      `}</style>
      </a>
    </Link>
  )
}

type Props = {
  allPosts: Array<blogData.BlogPost>;
};
export default function Blog(props: Props) {
  return (
    <div className='container'>
      <Layout pageTitle='TK Blog'>
        <div>
          <div className='group-container'>
            <h3>Python/Django</h3>
            {props.allPosts.map(post => (
              <PostLink
                postSlug={post.slug}
                text={post.frontmatter.title}
              />
            ))}
          </div>
        </div>
      </Layout>

      <style jsx>{`
        .group-container {
          display: flex;
          flex-direction: column;
          margin-left: 30px;  
        }

        .group-container > h3 {
          font-size: 36px;
        } 

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
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
