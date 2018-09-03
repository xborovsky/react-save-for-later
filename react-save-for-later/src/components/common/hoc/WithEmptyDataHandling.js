import React from 'react';

const withEmptyDataHandling = WrappedElement => ({data, children}) =>
    <WrappedElement>
        { data && data.length && children }
        { (!data || !data.length) && <div>No data created yet!</div> }
    </WrappedElement>
;

const WithEmptyDataHandlingComponent = withEmptyDataHandling(({children}) => <div>{children}</div>);

export default WithEmptyDataHandlingComponent;