import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const SecuredContent = ({isAuthenticated, children}) =>
    isAuthenticated ? children : <div><Redirect to="/login" /></div>
;

const mapStateToProps = state => ({
    isAuthenticated : state.authentication.isAuthenticated
  });

export default connect(mapStateToProps)(SecuredContent);