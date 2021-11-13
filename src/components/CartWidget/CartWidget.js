import 'boxicons';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    return(
        <Link to="/cart"><box-icon color="white" size="3rem" name='cart' ></box-icon></Link>
    )
}