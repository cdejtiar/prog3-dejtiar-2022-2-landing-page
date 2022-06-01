import React from 'react'
import styles from './Content.module.css';
import hero from '../../assets/hero.jpeg';
import Features from '../Features/Features';
import Banda from '../Banda/Banda';

const Content = ({handleShowPopUp}) => {
    return (
      <div className={styles['content_wrapper']}>
          <div>
            <img className={styles['hero']} src={hero} alt="Hero-One-Direction"></img>
            <h1 className={styles['title']}>One Direction</h1>
            
            <button className={styles['more']}>Ver más</button>
          </div>

          <div className={styles['features']}>
            <h2 className={styles['subtitle2']}>Música</h2>
            <Features />
          </div>

          <div className={styles['banda']}>
            <h2 className={styles['subtitle3']}>Banda</h2>
            <Banda handleShowPopUp={handleShowPopUp} />
          </div>
      </div>
    )
  }
  
  export default Content;