import React from 'react'
import SocialLogin from 'react-social-login'
import { FacebookLoginButton, LinkedInLoginButton } from "react-social-login-buttons";

const SocialButton = ({ triggerLogin, triggerLogout, ...props }) => {
    switch (props.type) {
        case 'facebook':
            return <FacebookLoginButton onClick={triggerLogin} />;
        case 'linkedin':
            return <LinkedInLoginButton onClick={triggerLogin} />;
        default:
            return null;
    }
};

export default SocialLogin(SocialButton);