import React, { useContext } from 'react'
import styles from '@/theme/components/darkmode.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import useLocalStorage from 'use-local-storage';
import { darkmodeContext } from '@/context/darkmode';

export const Darkmode = () => {
  const defaultDark = true;
  const darkmode = useContext(darkmodeContext);
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  React.useEffect(() => {
    const newTheme = darkmode.activeDarkMode ? 'dark' : 'light';
    document.body.setAttribute('data-theme', 'dark');
    setTheme(newTheme);
  }, [darkmode.activeDarkMode]);


  return (
    <button className={styles.btnTransparent}
      onClick={() => darkmode.setDarkMode(!darkmode.activeDarkMode)}
      data-theme={darkmode.activeDarkMode ? 'dark' : ''}>
      <FontAwesomeIcon icon={faMoon} />
      Darkmode
    </button>
  )
}


