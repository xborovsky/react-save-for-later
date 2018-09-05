import React from 'react';
import PropTypes from 'prop-types';
import CategoryListItem from '../category-list-item/CategoryListItem';

const CategoryList = ({categories, onDeleteCategory}) =>
    <div className="row">
        {categories.map(category =>
            <div key={category.id} className="col-12">
                <CategoryListItem category={category} onDeleteCategory={onDeleteCategory} />
            </div>
        )}
    </div>
;

CategoryList.propTypes = {
    categories : PropTypes.array.isRequired,
    onDeleteCategory : PropTypes.func.isRequired
};

export default CategoryList;