import React from 'react';
import PropTypes from 'prop-types';

import { idealTextColor } from '../../utils/color-util';

import './Category.css';

const Category = ({name, hexColor}) =>
    <a href="#" className="badge" style={{backgroundColor : `#${hexColor}`, color : idealTextColor(hexColor)}}>{name}</a>
;

Category.propTypes = {
    name : PropTypes.string.isRequired,
    hexColor : PropTypes.string.isRequired
};

export default Category;