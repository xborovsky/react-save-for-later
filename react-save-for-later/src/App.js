import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Categories from './pages/category-management/Categories';
import CreateCategory from './pages/category-management/CreateCategory';
import MainMenu from './components/menu/MainMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
        <Switch>
          <Route exact path='/' component={Categories}/>
          <Route path='/category/new' component={CreateCategory}/>
        </Switch>
      </div>
    );
  }
}

export default App;
