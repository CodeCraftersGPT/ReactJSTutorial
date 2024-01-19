// ChildComponent.js
import React from 'react';
import GrandChildComponent from './GrandChildComponent';
import styles from './styles';

function ChildComponent({ theme }) {
  return (
    <div>
      <h1 style={theme === 'dark' ? styles.dark : styles.light}>
        Child Component
      </h1>
      <GrandChildComponent theme={theme} />
    </div>
  );
}

export default ChildComponent;
