import Head from 'next/head'
import Navigation from './../components/Navigation'
import { Colors } from './../constants'

const Layout = ({ pageTitle, children }: { pageTitle: string, children: React.ReactNode }) => {
  return (
    <div className='container'>
      <Head>
        <title>{pageTitle}</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Amaranth&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Navigation />
      {children}

      <style jsx>{`
        .container {
          padding: 80px;
          display: flex;
          flex-direction: row;
          min-height: 100vh;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          background-color: ${Colors.beige};
          margin: 0;
          font-family: 'Amaranth', sans-serif;
          letter-spacing: 0.5px;
          color: ${Colors.blue}
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Layout;