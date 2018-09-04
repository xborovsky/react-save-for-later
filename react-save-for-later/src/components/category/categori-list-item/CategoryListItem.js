import React from 'react';
import PropTypes from 'prop-types';

import Category from '../Category';

const CategoryListItem = ({category, onDeleteCategory}) =>
    <div className="row">
        <div className="col-sm-10">
            <Category name={category.name}
                    hexColor={category.colorHex} />
        </div>
        <div className="col-sm-2">
            <i className="fas fa-trash-alt" onClick={() => onDeleteCategory(category.id)}></i>
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