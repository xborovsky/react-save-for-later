import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Tasks from './pages/tasks/Tasks';
import NotesContainer from './pages/notes/NotesContainer';
import CategoriesContainer from './pages/category-management/CategoriesContainer';
import MainMenu from './components/menu/MainMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
        <Switch>
          <Route exact path='/' component={Tasks}/>
          <Route path='/notes' component={NotesContainer}/>
          <Route path='/categories' component={CategoriesContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
