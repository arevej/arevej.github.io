import { PostLayout } from './PostLayout'
import Link from 'next/link'
import { Colors } from './constants'

const PostLink = ({ postSlug, text }: { postSlug: string; text: string }) => {
  return (
    <Link href={`/blog/${postSlug}`}>
      <a className='post-link'>
        {text}

        <style jsx>{`
          .post-link {
            color: ${Colors.blue};
            font-size: 24px;
            padding: 5px 0;
          }

          .post-link:visited {
            color: ${Colors.light_blue};
          }

          .post-link:first-of-type {
            padding-top: 0;
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

export default PostLink
