import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Notes from './Notes';
import NotesSideMenu from './NotesSideMenu';
import CreateNote from './CreateNote';

class NotesContainer extends Component {
    render() {
        const { match } = this.props;

        return (
            <div className="container">
                <h1>Notes</h1>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <NotesSideMenu />
                    </div>
                    <div className="col-12 col-md-9">
                        <Switch>
                            <Route exact path={`${match.path}/`} component={Notes} />
                            <Route path={`${match.path}/new`} component={CreateNote} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotesContainer;