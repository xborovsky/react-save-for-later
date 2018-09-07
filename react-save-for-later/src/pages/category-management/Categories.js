import React, { Component } from 'react';
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

    handleDeleteCategory = (id) => {
        if (window.confirm('Do you really want to delete the selected category?')) {
            this.props.deleteCategory(id)
                .then(() => this.props.fetchCategories());
        }
    };

    render() {
        const { error, loading, categories } = this.props;

        return (
            <div className="container">
                <h1>Categories</h1>
                <WithLoaderComponent loading={loading}>
                    <WithErrorHandlingComponent error={error}>
                        <div className="container">
                            <WithEmptyDataHandlingComponent data={categories}>
                                <CategoryList categories={categories}
                                            onDeleteCategory={(id) => this.handleDeleteCategory(id)} />
                            </WithEmptyDataHandlingComponent>
                        </div>
                    </WithErrorHandlingComponent>
                </WithLoaderComponent>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories);