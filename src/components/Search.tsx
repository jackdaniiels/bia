import React, { useContext } from 'react';
import styles from '@/theme/components/search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { darkmodeContext } from '@/context/darkmode';

interface SearchProps {
  setSearch: (value: string) => void
}

export const Search = ({ setSearch }: SearchProps) => {
  const darkmode = useContext(darkmodeContext);
  const [inputValue, setInputValue] = React.useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setSearch(inputValue.trim());
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setSearch(inputValue.trim());
  }

  return (
    <form onSubmit={onSubmit}
      className={styles.formSearch}
      autoComplete='off' data-theme={darkmode.activeDarkMode ? 'dark' : ''}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text"
        name='country'
        placeholder='Search for a country...'
        className={styles.inputSearch}
        value={inputValue} onChange={(e) => { setInputValue(e.target.value) }}
        onKeyDown={onKeyPress} 
        data-theme={darkmode.activeDarkMode ? 'dark' : ''}/>
    </form>
  )
}

