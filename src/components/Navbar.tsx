import React, { useContext } from 'react';
import styles from '@/theme/components/navbar.module.scss';
import { Darkmode } from '@/components/Darkmode';
import { darkmodeContext } from '@/context/darkmode';
export const Navbar = () => {
  
  const darkmode =  useContext(darkmodeContext);

  return (
    <nav className={ styles.nav } data-theme={darkmode.activeDarkMode ? 'dark' : ''}>
        <span>Where in the world?</span>
        <Darkmode />
    </nav>
  )
};
