import 'boxicons';
import './App.scss';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemList} from './components/ItemList/ItemList';
import {Item} from './components/Item/Item';
import sony from './media/aur-sony.webp'

function App() {
  

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer className="ItemListContainer"></ItemListContainer>
    </div>
  );
}

export default App;
