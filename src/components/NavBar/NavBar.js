import 'boxicons';
import { Link, NavLink} from 'react-router-dom';
import '../CartWidget/CartWidget';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <header>

            <h1><Link to="/">audiophile</Link></h1>

            <ul>
                <li><NavLink activeClassName="ActiveNavLink" exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName="ActiveNavLink" to="/category/Headphones">Headphones</NavLink></li>
                <li><NavLink activeClassName="ActiveNavLink" to="/category/In-ear">Earphones</NavLink></li>
            </ul>

            <CartWidget/>

        </header>
    )
}