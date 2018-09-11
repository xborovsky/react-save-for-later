import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Tasks from './pages/tasks/Tasks';
import NotesContainer from './pages/notes/NotesContainer';
import CategoriesContainer from './pages/category-management/CategoriesContainer';
import Login from './pages/login/Login';
import MainMenu from './components/menu/MainMenu';
import SecuredContent from './components/SecuredContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
        <SecuredContent>
          <Switch>
            <Route path='/tasks' component={Tasks}/>
            <Route path='/notes' component={NotesContainer}/>
            <Route path='/categories' component={CategoriesContainer}/>
          </Switch>
        </SecuredContent>
        <Route path='/login' component={Login}/>
      </div>
    );
  }
}

export default App;
