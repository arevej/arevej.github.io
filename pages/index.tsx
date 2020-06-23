import { useEffect, useState } from 'react'
import { Colors } from '../components/constants'
import { AnimatedLine } from '../components/Lines'
import Layout from '../components/Layout'

const SocialLinks = () => {
  return (
    <div className='social-links'>
      <a href='https://github.com/arevej' target='_blank'>
        <img src='/utils/git.svg' width={30} height={30} />
      </a>
      <a href='https://www.instagram.com/arevej/' target='_blank'>
        <img src='/utils/inst.svg' width={30} height={30} />
      </a>
      <a href='https://twitter.com/whyimsoalone' target='_blank'>
        <img src='/utils/twi.svg' width={30} height={30} />
      </a>
      <a href='mailto:tim@arevej.me' target='_blank'>
        <img src='/utils/mail.svg' width={30} height={30} />
      </a>

      <style jsx>{`
        .social-links {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          margin-left: 35px;
          padding: 25px 0;
          margin-top: -15px;
        }

        .social-links > a {
          padding: 10px;
          border-radius: 30px;
        }

        .social-links > a:hover {
          opacity: 0.8;
          transition: all 0.3s;
        }

        @media (max-width: 1024px) {
          .social-links {
            margin-left: 0;
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  )
}

const About = () => {
  const [currenWindowtHeight, setHeight] = useState(0)
  const maxLineHeight = currenWindowtHeight - 170

  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  return (
    <Layout pageTitle='Tim Kholod'>
      <div className='line-container'>
        <AnimatedLine maxLineHeight={maxLineHeight} />
      </div>

      <div className='content-container'>
        <div>
          <div className='avatar-container'>
            <img src='/utils/avatar.png' width={250} height={250} />
            <SocialLinks />
          </div>
        </div>

        <div className='intro-container'>
          <div className='intro'>
            <h2>
              Hey,
              <br />
              I’m <span style={{ color: Colors.yellow }}>Tim Kholod</span>
            </h2>
            <span>doing software</span>
            <span>learning languages</span>
            <span>exploring the world</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .content-container {
          display: flex;
          flex-direction: column;
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
          cursor: default;
        }

        .intro > h2 {
          font-size: 56px;
          margin-top: 0;
          margin-bottom: 10px;
        }

        .avatar-container {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }

        .avatar-container > img {
          align-self: center;
        }

        @media (max-width: 1024px) {
          .content-container {
            margin-left: 0;
            flex: 0;
          }

          .line-container {
            display: none;
          }

          .intro-container {
            justify-content: center;
          }

          .intro {
            margin-left: 0;
            text-align: center;
          }

          .intro > h2 {
            text-align: center;
          }

          .avatar-container {
            flex-direction: column;
            align-items: center;
            margin-left: 0;
            margin-top: 45px;
          }
        }
      `}</style>
    </Layout>
  )
}

export default About
