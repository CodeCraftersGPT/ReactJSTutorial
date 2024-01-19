// GreaterGrandChildComponent.js
import React from 'react';
import styles from './styles';

function GreaterGrandChildComponent({ theme }) {
  return (
    <h1 style={theme === 'dark' ? styles.dark : styles.light}>
      Greater Grand Child Component
    </h1>
  );
}

export default GreaterGrandChildComponent;
