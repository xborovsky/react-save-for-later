import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import WithErrorHandlingComponent from '../../components/common/hoc/WithErrorHandling';
import WithLoaderComponent from '../../components/common/hoc/WithLoader';
import WithEmptyDataHandlingComponent from '../../components/common/hoc/WithEmptyDataHandling';
import CategoryList from '../../components/category/category-list/CategoryList';
import { fetchCategoriesThunk, deleteCategoryThunk } from './redux/thunks';

class Categories extends Component {

    componentDidMount() {
        this.props.fetchCategories();
    }

    navigateToCreateNew = () => {
        this.props.history.push('/category/new');
    };

    handleDeleteCategory = (id) => {
        this.props.deleteCategory(id);
    };

    render() {
        const { error, loading, categories } = this.props;

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

const mapStateToProps = state => ({
    categories : state.categoriesReducer.categories,
    loading : state.categoriesReducer.loading,
    error : state.categoriesReducer.error
});

const mapDispatchToProps = dispatch => ({
    fetchCategories : () => dispatch(fetchCategoriesThunk()),
    deleteCategory : id => dispatch(deleteCategoryThunk(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Categories));