import 'boxicons';
import './App.scss';
import {NavBar} from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {Counter} from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer className="ItemListContainer" greeting="Hola! :D -- Soy un contenedor de productos!" />
      <Counter></Counter>
    </div>
  );
}

export default App;
