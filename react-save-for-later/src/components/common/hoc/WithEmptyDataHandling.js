import React from 'react';

const withEmptyDataHandling = WrappedElement => ({data, children}) =>
    <WrappedElement>
        { data && data.length ? children : null }
        { (!data || !data.length) && <div className="col-12 text-center">No data created yet!</div> }
    </WrappedElement>
;

const WithEmptyDataHandlingComponent = withEmptyDataHandling(({children}) => <div>{children}</div>);

export default WithEmptyDataHandlingComponent;