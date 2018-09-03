import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Categories from './pages/category-management/Categories';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Categories}/>
        </Switch>
      </div>
    );
  }
}

export default App;
