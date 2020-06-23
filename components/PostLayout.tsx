import Layout from './Layout'
import { Line } from './Lines'

export const PostLayout = ({
  children,
  pageTitle
}: {
  children: React.ReactNode
  pageTitle: string
}) => {
  return (
    <Layout pageTitle={pageTitle}>
      <div className='container'>
        <Line className='styled-line' />
        <div className='group-container'>{children}</div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          padding-top: 10px;
        }

        :global(.styled-line) {
          margin-left: 250px;
          margin-right: 60px;
        }

        .group-container {
          display: flex;
          flex-direction: column;
          max-width: 600px;
        }

        :global(.group-container h3) {
          font-size: 36px;
          margin-top: 0;
          margin-bottom: 25px;
        }

        @media (max-width: 1024px) {
          .container {
            padding-top: 30px;
            justify-content: center;
          }

          :global(.styled-line) {
            display: none;
          }
        }
      `}</style>
    </Layout>
  )
}
