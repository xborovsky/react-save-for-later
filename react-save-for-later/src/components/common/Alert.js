import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({type, message}) =>
    <div className={`alert alert-${type}`} role="alert">
        {message}
    </div>
;

Alert.propTypes = {
    type : PropTypes.oneOf(['primary', 'secondary',
        'success', 'danger', 'warning', 'info',
        'light', 'dark']).isRequired,
    message : PropTypes.string.isRequired
};

export default Alert;