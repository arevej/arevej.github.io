import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const Colors = {
  blue: '#132446',
  yellow: '#F49D10',
  beige: '#F7F6F1'
}

const NavLink = ({ to, text, selected }: { to: string, text: string, selected: boolean }) => {
  return (
    <Link href={to}>
      <a className='navigation-link'>
        {text}

        <style jsx>{`
        .navigation-link {
          color: ${selected ? Colors.yellow : Colors.blue};
          text-decoration: none;
          font-size: 28px;
          padding-bottom: 4px;
        }

        .navigation-link:hover {
          color: ${Colors.yellow};
          transition: all 0.4s;
        }


      `}</style>
      </a>
    </Link>
  )
}

export const Navigation = () => {
  const router = useRouter()
  const isSelected = (path: string) => router.pathname === path

  return (
    <div className='navigation'>
      <NavLink
        to='/'
        text='about'
        selected={isSelected('/')}
      />
      <NavLink
        to='/portfolio'
        text='portfolio'
        selected={isSelected('/portfolio')}
      />
      <NavLink
        to='/cv'
        text='cv'
        selected={isSelected('/cv')}
      />
      <NavLink
        to='/blog'
        text='blog'
        selected={isSelected('/blog')}
      />
      <style jsx>{`
        .navigation {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  )
}

export const Layout = ({ pageTitle, children }: { pageTitle: string, children: React.ReactNode }) => {
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

const LINE_HEIGHT = 5;

const AnimatedLine = ({ maxLineHeight }: { maxLineHeight: number }) => {
  const animBy = maxLineHeight / LINE_HEIGHT
  return (
    <div className='line'>
      <style jsx>{`
       .line-container {
          margin-left: 250px;
          display: flex;
          align-items: center;
        }
        .line {
          background-color: ${Colors.yellow};
          width: 5px;
          height: ${LINE_HEIGHT}px;
          animation-name: move;
          animation-duration: 2s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
        }

        @keyframes move {
          0% {
            transform: scaleY(0);
              }
          100% {
            transform: scaleY(${animBy});
            }
        }
      `}</style>
    </div>

  )
}

export default function Home() {
  const [currenWindowtHeight, setHeight] = useState(0)
  const maxLineHeight = currenWindowtHeight - 180

  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  const copyLogin = (evt) => {
    evt.preventDefault();
    if (evt.clipboardData) {
      evt.clipboardData.setData("text/plain", 'arevej');
    }
  }

  return (
    <Layout pageTitle='Tim Kholod'>
      <div className='line-container'>
        <AnimatedLine maxLineHeight={maxLineHeight} />
      </div>

      <div className='content-container'>
        <div className='intro-container'>
          <div className='intro'>
            <h3>
              Hey,
          <br />
          I’m <span style={{ color: Colors.yellow }}>Tim Kholod</span>
            </h3>
            <span>
              doing software
        </span>
            <span>
              learning languages
        </span>
            <span>
              exploring the world
        </span>
          </div>
        </div>

        <div>
          <div className='avatar-container'>
            <img src='/img/avatar.png' width={250} height={250} />

            <div className='social-links'>
              <a href='https://github.com/arevej' target="_blank">
                <img src='/img/git.svg' width={30} height={30} />
              </a>
              <a href='https://www.instagram.com/arevej/' target="_blank">
                <img src='/img/inst.svg' width={30} height={30} />
              </a>
              <a href='https://twitter.com/whyimsoalone' target="_blank">
                <img src='/img/twi.svg' width={30} height={30} />
              </a>
              <a href='mailto:tim@arevej.me' target="_blank">
                <img src='/img/mail.svg' width={30} height={30} />
              </a>

            </div>


          </div>
        </div>

      </div>





      <style jsx>{`
        .content-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          flex: 1;
        }
        .line-container {
          margin-left: 250px;
          display: flex;
          align-items: center;
        }

        .intro-container {
          display: flex;
          align-items: flex-end;

        }

        .intro {
          display: flex;
          flex-direction: column;
          font-size: 28px;
          margin-left: 80px;
          margin-bottom: 100px;
          cursor: default;
        }

        .intro > h3 {
          font-size: 56px;
          margin-top: 0;
          margin-bottom: 10px;
        }

        .avatar-container {
          display: flex;
          flex-direction: row;
          margin-top: 5px;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          margin-left: 65px;
          padding: 25px 0;
        }

        .social-links > a {
          padding: 7px 8px 3px 8px;
          border-radius: 30px; 
        }

        .social-links > a:hover {
          background: ${Colors.yellow};
          transition: all 0.3s;
        }
      `}</style>

    </Layout>
  )
}
