import React from 'react';

import Alert from '../Alert';

const withErrorHandling = WrappedComponent => ({ error, children }) =>
    <WrappedComponent>
        { error && <Alert type="danger" message="Error loading data!" /> }
        { !error && children}
    </WrappedComponent>
;

const WithErrorHandlingComponent = withErrorHandling(({children}) => <div>{children}</div>);

export default WithErrorHandlingComponent;