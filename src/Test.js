import React from 'react';

const MyComponent = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ backgroundColor: 'blue', flex: '70%' }}></div>
      <div style={{ backgroundColor: 'red', flex: '30%' }}></div>
    </div>
  );
};

export default MyComponent;