import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import WithErrorHandling from '../../components/common/hoc/WithErrorHandling';
import SocialButton from './SocialButton';
import { loginSuccessThunk } from './redux/thunk';
import { loginSuccess, loginError, logoutSuccess, logoutError } from './redux/actions';

class Login extends Component {

    handleLogin = user => {
        this.props.onSuccessLogin(user);
        this.props.onSuccess();
        this.props.history.push('/notes');
    }

    handleLoginError = err => {
        console.error(err);
        this.props.onErrorLogin(err);
    }

    render() {
        const { error } = this.props;

        return (
            <div className="container">
                <WithErrorHandling error={error}>
                    <div className="col-12 col-md-6 offset-md-3">
                        <SocialButton
                            provider='facebook'
                            appId='865590820300974'
                            onLoginSuccess={this.handleLogin}
                            onLoginFailure={this.handleLoginError}
                            onLogoutSuccess={this.onLogoutSuccess}
                            type='facebook' />
                        <SocialButton
                            provider='linkedin'
                            appId='78pql29nl98pvi'
                            onLoginSuccess={this.handleLogin}
                            onLoginFailure={this.handleLoginError}
                            onLogoutSuccess={this.onLogoutSuccess}
                            type='linkedin' />
                    </div>
                </WithErrorHandling>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSuccessLogin : user => dispatch(loginSuccessThunk(user)),
    onErrorLogin : error => dispatch(loginError(error))
});

export default connect(null, mapDispatchToProps)(withRouter(Login));