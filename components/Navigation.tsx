import Link from 'next/link'
import { useRouter } from 'next/router'
import { Colors } from './constants'

const NavLink = ({
  to,
  text,
  selected
}: {
  to: string
  text: string
  selected: boolean
}) => {
  return (
    <Link href={to}>
      <div>
        <a className='navigation-link'>{text}</a>
        <style jsx>{`
          .navigation-link {
            color: ${selected ? Colors.yellow : Colors.blue};
            text-decoration: none;
            font-size: 28px;
            padding-bottom: 4px;
            user-select: none;
            cursor: pointer;
          }

          .navigation-link:hover {
            color: ${Colors.yellow};
            transition: all 0.4s;
          }
        `}</style>
      </div>
    </Link>
  )
}

const Navigation = () => {
  const router = useRouter()
  const isSelected = (path: string) => router.pathname.split('/')[1] === path

  return (
    <div className='navigation'>
      <NavLink to='/' text='about' selected={isSelected('')} />
      <NavLink
        to='/portfolio'
        text='portfolio'
        selected={isSelected('portfolio')}
      />
      <NavLink to='/cv.pdf' text='cv' selected={isSelected('cv')} />
      <NavLink to='/blog' text='blog' selected={isSelected('blog')} />

      <style jsx>{`
        .navigation {
          display: flex;
          flex-direction: column;
          position: fixed;
          z-index: 100;
        }

        @media (max-width: 1024px) {
          .navigation {
            position: relative;
            z-index: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default Navigation
