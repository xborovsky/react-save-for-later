import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Categories from './Categories';
import CategoriesSideMenu from './CategoriesSideMenu';
import CreateCategory from './CreateCategory';

class CategoriesContainer extends Component {
    render() {
        const { match } = this.props;

        return (
            <div className="container">
                <h1>Categories</h1>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <CategoriesSideMenu />
                    </div>
                    <div className="col-12 col-md-9">
                        <Switch>
                            <Route exact path={`${match.path}/`} component={Categories} />
                            <Route path={`${match.path}/new`} component={CreateCategory} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoriesContainer;