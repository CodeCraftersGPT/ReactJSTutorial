// GrandChildComponent.js
import React from 'react';
import GreaterGrandChildComponent from './GreaterGrandChildComponent';
import styles from './styles';

function GrandChildComponent({ theme }) {
  return (
    <div>
      <h1 style={theme === 'dark' ? styles.dark : styles.light}>
        Grand Child Component
      </h1>
      <GreaterGrandChildComponent theme={theme} />
    </div>
  );
}

export default GrandChildComponent;
