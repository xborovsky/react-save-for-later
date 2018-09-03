import React, { Component } from 'react';

import Category from '../../components/category/Category';
import { getAllCategories } from './../../api/category-api';
import WithErrorHandlingComponent from '../../components/common/hoc/WithErrorHandling';
import WithLoaderComponent from '../../components/common/hoc/WithLoader';
import WithEmptyDataHandlingComponent from '../../components/common/hoc/WithEmptyDataHandling';

export default class Categories extends Component {
    state = {
        categories : [],
        error : false,
        loading : true
    };

    componentDidMount() {
        getAllCategories()
            .then(categories => this.setState({categories, loading : false}))
            .catch(err => {
                console.error(err);
                this.setState({error : true, loading : false});
            });
    }

    render() {
        const { error, loading, categories } = this.state;

        return (
            <WithLoaderComponent loading={loading}>
                <WithErrorHandlingComponent error={error}>
                    <div className="container">
                        <button className="btn btn-primary">
                            <i className="far fa-plus-square"></i> Create new
                        </button>
                        <WithEmptyDataHandlingComponent data={categories}>
                            { categories && categories.length &&
                                categories.map(category =>
                                    <div className="col-sm-12 col-md-6 col-lg-4">
                                        <Category key={category.id}
                                                name={category.name}
                                                hexColor={category.hexColor} />
                                    </div>
                                )
                            }
                        </WithEmptyDataHandlingComponent>
                    </div>
                </WithErrorHandlingComponent>
            </WithLoaderComponent>
        );
    }
}