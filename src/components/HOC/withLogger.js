import React, { useEffect } from 'react';

function withLogger(WrappedComponent) {
  return function(props) {
    useEffect(() => {
      console.log(`ComponentDidMount: ${WrappedComponent.name} mounted.`);
      return () => {
        console.log(`ComponentWillUnmount: ${WrappedComponent.name} unmounted.`);
      };
    }, []); // Empty dependency array means this runs once on mount

    useEffect(() => {
      console.log(`ComponentDidUpdate: ${WrappedComponent.name} updated.`);
    }); // No dependency array means this runs on every update

    return <WrappedComponent {...props} />;
  };
}

export default withLogger;

