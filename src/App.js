import 'boxicons';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Categories } from './components/Categories/Categories';
import { CartProvider } from './contexts/CartContext';
import { Cart } from './components/Cart/Cart';
import { CartBuy } from './components/Cart/CartBuy';

export default function App() {

  return (

    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />

          <Switch>

            <Route exact path="/">
              <ItemListContainer></ItemListContainer>
            </Route>

            <Route path="/category/:categoryId">
              <Categories></Categories>
              <ItemListContainer></ItemListContainer>
            </Route>

            <Route exact path="/item/:itemId">
              <ItemDetailContainer></ItemDetailContainer>
            </Route>

            <Route exact path="/cart">
              <Cart/>
            </Route>

            <Route exact path="/cart/finish">
              <CartBuy/>
            </Route>

          </Switch>

        </BrowserRouter>
      </div>
    </CartProvider>

  );
}
