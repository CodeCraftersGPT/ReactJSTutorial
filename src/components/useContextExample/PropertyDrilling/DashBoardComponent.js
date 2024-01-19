// DashboardComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';
import styles from './styles';

function DashboardComponent({ theme }) {
  return (
    <div>
      <h1 style={theme === 'dark' ? styles.dark : styles.light}>
        Dashboard Component
      </h1>
      <ChildComponent theme={theme} />
    </div>
  );
}

export default DashboardComponent;
