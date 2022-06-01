//CREAR UN COMPONENTE
import React from 'react';
import styles from './Header.module.css';
import Menu from '../Menu/Menu';

const Header = () => {
    return(
        <div className={styles['header_wrapper']}>
            <Menu />
        </div>
        
    );
}

export default Header;