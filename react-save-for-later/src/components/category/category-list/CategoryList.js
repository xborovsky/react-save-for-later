import React from 'react';
import PropTypes from 'prop-types';
import CategoryListItem from '../categori-list-item/CategoryListItem';

const CategoryList = ({categories, onDeleteCategory}) =>
    categories.map(category =>
        <div key={category.id} className="col-sm-12 col-md-6 col-lg-4">
            <CategoryListItem category={category} onDeleteCategory={onDeleteCategory} />
        </div>
    )
;

CategoryList.propTypes = {
    categories : PropTypes.array.isRequired,
    onDeleteCategory : PropTypes.func.isRequired
};

export default CategoryList;