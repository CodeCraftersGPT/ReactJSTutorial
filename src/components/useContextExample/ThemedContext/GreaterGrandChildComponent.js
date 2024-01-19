// GreaterGrandChildComponent.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import styles from './styles';

function GreaterGrandChildComponent() {
  const theme = useContext(ThemeContext);

  return (
    <h1 style={theme === 'dark' ? styles.dark : styles.light}>
      Greater Grand Child Component
    </h1>
  );
}

export default GreaterGrandChildComponent;
