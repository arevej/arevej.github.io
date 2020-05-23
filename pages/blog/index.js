import { Layout } from '../index'

export default function Blog () {
  return (
    <div className='container'>
      <Layout pageTitle='TK Blog'>
        <div>
          <div>
            <h3>Python/Django</h3>
          </div>
        </div>
      </Layout>

      <style jsx>{`
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
