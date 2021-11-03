import 'boxicons';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemList} from './components/ItemList/ItemList';
import {Item} from './components/Item/Item';
import sony from './media/aur-sony.webp'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>

        <Switch>
          <Route exact path="/">
            <ItemListContainer className="ItemListContainer"></ItemListContainer>
            <ItemDetailContainer></ItemDetailContainer>
          </Route>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
