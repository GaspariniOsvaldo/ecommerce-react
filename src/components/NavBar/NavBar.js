import 'boxicons';
import '../CartWidget/CartWidget';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
    return (
        <header>

            <h1>audiophile</h1>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Headphones</a></li>
                <li><a href="#">Speakers</a></li>
                <li><a href="#">Earphones</a></li>
            </ul>

            <CartWidget/>

        </header>
    )
}