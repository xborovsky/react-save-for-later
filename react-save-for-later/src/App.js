import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Tasks from './pages/tasks/Tasks';
import NotesContainer from './pages/notes/NotesContainer';
import CategoriesContainer from './pages/category-management/CategoriesContainer';
import Login from './pages/login/Login';
import MainMenu from './components/menu/MainMenu';
import SecuredContent from './components/SecuredContent';
import { getData, remove } from './utils/session-storage-manager';

class App extends Component {
  state = {
    authentication : null
  }

  componentDidMount() {
    this.refreshAuthenticationStatus();
  }

  refreshAuthenticationStatus = () => {
    const data = getData('authentication');
    this.setState({authentication : data ? JSON.parse(data) : null});
  }

  handleLogout = () => {
    remove('authentication');
    this.setState({authentication : null});
  };

  render() {
    const { authentication } = this.state;

    return (
      <div className="App">
        <MainMenu authentication={authentication} onLogout={() => this.handleLogout()} />
        <SecuredContent authentication={authentication}>
          <Switch>
            <Route path='/tasks' component={Tasks}/>
            <Route path='/notes' component={NotesContainer}/>
            <Route path='/categories' component={CategoriesContainer}/>
          </Switch>
        </SecuredContent>
        <Route path='/login' component={() => <Login onSuccess={() => this.refreshAuthenticationStatus()} />}/>
      </div>
    );
  }
}

export default App;
