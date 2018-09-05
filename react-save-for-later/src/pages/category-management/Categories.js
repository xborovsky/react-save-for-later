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
        if (window.confirm('Do you really want to delete the selected category?')) {
            this.props.deleteCategory(id);
            this.props.fetchCategories();
        }
    };

    render() {
        const { error, loading, categories } = this.props;

        return (
            <WithLoaderComponent loading={loading}>
                <WithErrorHandlingComponent error={error}>
                    <div className="container">
                        <div className="row">
                            <button className="btn btn-primary" onClick={() => this.navigateToCreateNew()} title="Click to create a new category">
                                <i className="far fa-plus-square"></i> Create new
                            </button>
                        </div>
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
    categories : state.categories.categories,
    loading : state.categories.loading,
    error : state.categories.error
});

const mapDispatchToProps = dispatch => ({
    fetchCategories : () => dispatch(fetchCategoriesThunk()),
    deleteCategory : id => dispatch(deleteCategoryThunk(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Categories));