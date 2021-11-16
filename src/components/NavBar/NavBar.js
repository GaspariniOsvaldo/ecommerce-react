import 'boxicons';
import { Link, NavLink} from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import '../CartWidget/CartWidget';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {

    const { cart } = useCart();

    return (
        <header>

            <h1><Link to="/">audiophile</Link></h1>

            <ul>
                <li><NavLink activeClassName="ActiveNavLink" exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName="ActiveNavLink" to="/category/Headphones">Headphones</NavLink></li>
                <li><NavLink activeClassName="ActiveNavLink" to="/category/In-ear">Earphones</NavLink></li>
            </ul>

            {
                cart[0] !== undefined ? (<CartWidget/>) : (<div></div>)
            }

        </header>
    )
}