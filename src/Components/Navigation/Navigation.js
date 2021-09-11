import { NavLink } from "react-router-dom"
import s from './Navigation.module.css'



const Navigation = () => {
    return (
        <nav>
            <NavLink to="/" exact className={s.navLink} activeClassName={s.activeNavLink}>Homepage</NavLink>
            <NavLink to="/Movies" className={s.navLink} activeClassName={s.activeNavLink}>Movies</NavLink>
            <hr />
        </nav>
    )
}

export default Navigation