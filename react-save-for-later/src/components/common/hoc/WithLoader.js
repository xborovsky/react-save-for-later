import React from 'react';

const withLoader = WrappedComponent => ({loading, children}) =>
    <WrappedComponent>
        { loading && <i className="fa fa-spinner fa-spin"></i> }
        { !loading && children }
    </WrappedComponent>
;

const WithLoaderComponent = withLoader(({children}) => <div>{children}</div>);

export default WithLoaderComponent;