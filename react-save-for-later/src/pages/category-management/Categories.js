import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import { getAllCategories, deleteCategory } from './../../api/category-api';
import WithErrorHandlingComponent from '../../components/common/hoc/WithErrorHandling';
import WithLoaderComponent from '../../components/common/hoc/WithLoader';
import WithEmptyDataHandlingComponent from '../../components/common/hoc/WithEmptyDataHandling';
import CategoryList from '../../components/category/category-list/CategoryList';

class Categories extends Component {
    state = {
        categories : [],
        error : false,
        loading : true
    };

    componentDidMount() {
        getAllCategories()
            .then(categories => this.setState({categories : categories.data, loading : false}))
            .catch(err => {
                console.error(err);
                this.setState({error : true, loading : false});
            });
    }

    navigateToCreateNew = () => {
        this.props.history.push('/category/new');
    };

    handleDeleteCategory = (id) => {
        deleteCategory(id)
            .then(res => {
                const categories = this.state.categories.filter(category => category.id !== id);
                this.setState({categories});
            }).catch(err => console.error(err));
    };

    render() {
        const { error, loading, categories } = this.state;

        return (
            <WithLoaderComponent loading={loading}>
                <WithErrorHandlingComponent error={error}>
                    <div className="container">
                        <button className="btn btn-primary" onClick={() => this.navigateToCreateNew()}>
                            <i className="far fa-plus-square"></i> Create new
                        </button>
                        <WithEmptyDataHandlingComponent data={categories}>
                            <CategoryList categories={categories}
                                          onDeleteCategory={(id) => this.handleDeleteCategory(id)} />
                        </WithEmptyDataHandlingComponent>
                    </div>
                </WithErrorHandlingComponent>
            </WithLoaderComponent>
        );
    }
}

export default withRouter(Categories);