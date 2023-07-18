import React, { useCallback } from 'react';

const SampleComponent = () => {

  const firstFunction = useCallback(() => {
    console.log('First Function');
  }, []);

  const secondFunction = useCallback(() => {
    console.log('Second Function');
  }, []);

  const thirdFunction = useCallback(() => {
    console.log('Third Function');
  }, []);

  return (
    <div>
      <h1>Functional Component</h1>
      <h2>Sample for checking git pages</h2>
      <button onClick={firstFunction}>First Function</button>
      <button onClick={secondFunction}>Second Function</button>
      <button onClick={thirdFunction}>Third Function</button>
    </div>
  );
};

export default SampleComponent;
