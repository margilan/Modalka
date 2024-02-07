import React from 'react';
import styles from './bgdrop.module.css';

function Bgdrop({ onClose }) {
  return <div className={styles.bgdrop} onClick={onClose}></div>;
}

export default Bgdrop;
