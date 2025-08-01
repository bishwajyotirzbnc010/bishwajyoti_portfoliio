import {Link, Navbar, NavLink} from "react-router"

const Navbar = () =>
     <nav className="pt-5 fixed top-0 w-full bg-neutral-500">
        <ul className="flex gap-10 justify-center">
            <li><NavLink >HOME</NavLink></li>
            <li><NavLink >ABOUT</NavLink></li>
            <li><NavLink >PORTFOLIO</NavLink></li>
            <li><NavLink >EXPERIENCE</NavLink></li>
            <li><NavLink >SKILLS</NavLink></li>
            <li><NavLink >CONTACT</NavLink></li>
            <li><NavLink >BLOG</NavLink></li>
        </ul>
     </nav>
export default Navbar    