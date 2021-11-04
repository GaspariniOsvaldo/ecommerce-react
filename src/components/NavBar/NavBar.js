import 'boxicons';
import { Link} from 'react-router-dom';
import '../CartWidget/CartWidget';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <header>

            <h1><Link to="/">audiophile</Link></h1>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Headphones</Link></li>
                <li><Link to="/">Speakers</Link></li>
                <li><Link to="/">Earphones</Link></li>
            </ul>

            <CartWidget/>

        </header>
    )
}