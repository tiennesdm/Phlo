import React from 'react';
import loadable from '@loadable/component';
// I am using loadbale component as it supports server side rendering as well as and recommended by react
// see https://reactjs.org/docs/code-splitting.html#reactlazy
const lazyComponent = (component, path) => {
    let imports = loadable(() =>
        import(`../Pages/${path}`).catch((err) => {
            if (err.message.indexOf('Cannot find module') !== -1) {
                return {
                    default: () => (
                        <React.Fragment>
                            <p>
                                You asked for component {`${component}`} with
                                component path {`../Pages/${path}`}
                            </p>
                            <p>It is not included in Repository </p>
                        </React.Fragment>
                    ),
                };
            } else {
                return {
                    default: () => (
                        <React.Fragment>
                            <p>{err.message}</p>
                            <p>It is not included in Repository </p>
                        </React.Fragment>
                    ),
                };
            }
        }),
    );
    return imports;
};

export default lazyComponent;
