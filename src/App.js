import 'boxicons';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Categories } from './components/Categories/Categories';
import { useEffect, useState } from 'react';
import { createContext } from 'react';


/* YA LO CORRIJO, ROMPI TODO */




return (
  <CartContext.Provider value={Cart}>

    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Switch>

          <Route exact path="/">
            <Categories></Categories>
            <ItemListContainer></ItemListContainer>
          </Route>

          <Route path="/category/:categoryId">
            <Categories></Categories>
            <ItemListContainer></ItemListContainer>
          </Route>

          <Route exact path="/item/:itemId">
            <ItemDetailContainer></ItemDetailContainer>
          </Route>

        </Switch>

      </BrowserRouter>
    </div>

  </CartContext.Provider>
);

export default App;
