import React from 'react';
import PropTypes from 'prop-types';

const Category = ({name, hexColor}) =>
    <a href="#" className="badge" style={{backgroundColor : '#' + hexColor}}>{name}</a>
;

Category.propTypes = {
    name : PropTypes.string.isRequired,
    hexColor : PropTypes.string.isRequired
};

export default Category;