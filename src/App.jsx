import React, { useState } from 'react';
import styles from './App.module.css'; 
import Bgdrop from './components/bgdrop/bgdrop';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      {isOpen && <Bgdrop onClose={() => setIsOpen(false)} />}

      <button className={styles.btnbutton} onClick={() => setIsOpen(true)}>Modalni ochish</button>
      
      {isOpen && (
        <div className={styles.modal}>
          <h2 className={styles.textone}>Elbek Shermatov</h2>
          <p className={styles.textthree}>Elbek Shermatov Najot ta'lim <br /> o'quv kursida oqiydi .</p>
          <button className={styles.btn} onClick={() => setIsOpen(false)}>❌</button>
        </div>
      )}
    </div>
  );
}

export default Modal;
