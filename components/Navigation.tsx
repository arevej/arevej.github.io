import Link from 'next/link'
import { useRouter } from 'next/router'
import { Colors } from '../pages/constants'

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

const Navigation = () => {
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

export default Navigation
