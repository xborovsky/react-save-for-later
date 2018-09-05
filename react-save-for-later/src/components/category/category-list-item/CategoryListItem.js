import React from 'react';
import PropTypes from 'prop-types';

import Category from '../Category';

import './CategoryListItem.css';

const CategoryListItem = ({category, onDeleteCategory}) =>
    <div className="row">
        <div className="col-10">
            <Category name={category.name}
                    hexColor={category.colorHex} />
        </div>
        <div className="col-2 pull-right">
            <i className="fas fa-trash-alt" onClick={() => onDeleteCategory(category.id)} title="Delete category"></i>
        </div>
    </div>
;

CategoryListItem.propTypes = {
    category : PropTypes.shape({
        id : PropTypes.number,
        name : PropTypes.string,
        hexColor : PropTypes.string
    }).isRequired,
    onDeleteCategory : PropTypes.func.isRequired
};

export default CategoryListItem;