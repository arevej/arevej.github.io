import { Line } from '../../components/Lines'
import Layout from '../../components/Layout'
import { useState } from 'react'
import ArrowUp from '../../public/utils/arrowUp'
import ArrowDown from '../../public/utils/arrowDown'

const portfolioData = [
  {
    id: 1,
    projectName: 'andreiucop.com',
    image: '/portfolio/ucop.png',
    alt: 'Screenshot of Andrei Juradowich website',
    description:
      'I implemented a personal website for Andrei Juradowich. This project has animated slideshows, embedded Vimeo players, responsive design. Since the client is a designer, one of the requirements was making the top-level component structure easily understandable and editable.',
    demoLink: 'http://andreiucop.com/'
  },
  {
    id: 2,
    projectName: 'crclm',
    image: '/portfolio/crclm.png',
    alt: 'Screenshot of main page of crclm',
    description: 'A task management app.',
    demoLink: 'https://crclm.netlify.com/'
  },
  {
    id: 3,
    projectName: 'aprendES',
    image: '/portfolio/aprendes.png',
    alt: 'Screenshot of main page of aprendes',
    description:
      'aprendES is a web application for learning Spanish online. It’s work-in-progress and it’s meant to combine my development skills with the teaching approaches that I found to work well. It has several types of exercises and a design, both of which I came up with by myself.',
    demoLink: 'https://hopeful-kirch-e17f2e.netlify.com/'
  },
  {
    id: 4,
    projectName: 'apptv',
    alt: 'Screenshot of main page of apptv',
    image: '/portfolio/apptv.png',
    description: (
      <ul>
        <p>
          apptv is an experiment to clone the User Interface and Experience of
          Apple TV and bring it to the web. Keyboard navigation is supported.
          There are two functioning apps:
        </p>
        <li>Wolforator, which is a calculator application; and</li>
        <li>Catyminders, which is a Reminders-style to-do app.</li>
      </ul>
    ),
    demoLink: 'https://nostalgic-rosalind-1b2f0d.netlify.com/'
  },

  {
    id: 5,
    projectName: 'MacOS-like Desktop on the web',
    image: '/portfolio/desktop.png',
    alt: 'Screenshot of MacOS-like Desktop on the web',
    description: (
      <ul>
        <p>
          It’s a replica of the desktop and window management experience in
          macOS. There is a working dock; windows can be opened from the dock,
          moved around, resized, maximized, and minimized. Working applications:
        </p>
        <li>Followers, which is a an app to manage friend requests.</li>
        <li>BookFly (work-in-progress), which is an app to book tickets.</li>
      </ul>
    ),
    demoLink: 'https://sad-spence-442c98.netlify.com/'
  }
]

const SliderButton = ({ Icon, active, onClick }) => {
  return (
    <div className='button' onClick={active && onClick}>
      {Icon}
      <style jsx>{`
        .button {
          padding: 10px 20px;
          cursor: ${active ? 'pointer' : 'normal'};
          margin: 10px 0;
          opacity: ${active ? 1 : 0};
          transition: opacity 0.2s;
        }
        .button:hover {
          opacity: ${active ? 0.6 : 0};
        }
      `}</style>
    </div>
  )
}

const Portfolio = () => {
  const [id, setId] = useState(1)

  const project = portfolioData.find(proj => proj.id === id)

  const isFirstProject = portfolioData.indexOf(project) === 0
  const isLastProject =
    portfolioData.indexOf(project) === portfolioData.length - 1

  return (
    <Layout pageTitle='Tim Kholod'>
      <div className='container'>
        <SliderButton
          Icon={<ArrowUp />}
          active={!isFirstProject}
          onClick={() => setId(id - 1)}
        />
        <div className='project-info' key={id}>
          <h1 className='name'>{project.projectName}</h1>
          <Line className='styled-line' />
          <div className='description'>
            <div>{project.description}</div>
            <div className='image'>
              <a href={project.demoLink} target='_blank'>
                <img src={project.image} alt={project.alt} />
              </a>
            </div>
          </div>
        </div>
        <SliderButton
          Icon={<ArrowDown />}
          active={!isLastProject}
          onClick={() => setId(id + 1)}
        />
      </div>

      <style jsx>{`
        @keyframes fadeInFromNone {
          0% {
            display: none;
            opacity: 0;
          }

          1% {
            display: block;
            opacity: 0;
          }

          100% {
            display: block;
            opacity: 1;
          }
        }

        :global(ul) {
          margin: 0;
          padding: 0;
        }

        :global(li) {
          margin-left: 35px;
        }

        :global(.description p:first-of-type) {
          margin-top: 0;
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          flex: 1;
        }

        .project-info {
          display: flex;
          flex-direction: row;
          height: 100%;
          width: 100%;
          animation-name: fadeInFromNone;
          animation-duration: 1s;
          animation-fill-mode: forwards;
        }

        .description {
          width: 40%;
          margin-left: 50px;
          font-family: 'Titillium Web', sans-serif;
          font-size: 18px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          user-select: none;
        }

        .image {
          display: flex;
          justify-content: center;
          margin-top: 20px;
          user-select: none;
        }

        .image img {
          max-width: 100%;
        }

        .name {
          width: 40%;
          text-align: right;
          margin-right: 50px;
          align-self: center;
          user-select: none;
        }

        .button-placeholder {
          height: 88px;
        }

        @media (max-width: 1024px) {
          .project-info {
            flex-direction: column;
          }

          :global(.styled-line) {
            display: none;
          }

          .description {
            width: 100%;
            margin-left: 0;
            flex-direction: column-reverse;
          }

          .image {
            margin-bottom: 20px;
          }

          .name {
            width: 100%;
            text-align: center;
            margin-right: 0;
            margin-top: 0;
          }
        }
      `}</style>
    </Layout>
  )
}

export default Portfolio
