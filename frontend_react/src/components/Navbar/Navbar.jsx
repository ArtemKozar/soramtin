import { NavLink } from 'react-router-dom'
import style from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav>
      <NavLink to=".">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="mylink">MyList</NavLink>
    </nav>
  )
}

export default Navbar
