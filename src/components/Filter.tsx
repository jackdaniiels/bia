import React, { useContext } from 'react';
import styles from '@/theme/components/filter.module.scss';
import { regionsList } from '@/utils/regions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { darkmodeContext } from '@/context/darkmode';

interface FilterProps {
  setFilter: (value: string) => void,
  filter: string
}

export const Filter = ({ filter, setFilter }: FilterProps) => {
  const darkmode = useContext(darkmodeContext);

  return (
    <div className={styles.filterContainer} data-theme={darkmode.activeDarkMode ? 'dark' : ''}>
      <select name="filter" className={styles.inputFilter} value={filter} onChange={(e) => {
        setFilter(e.target.value);
      }} data-theme={darkmode.activeDarkMode ? 'dark' : ''}>
        <option value="" disabled>Filter by Region</option>
        {
          regionsList.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))
        }
      </select>
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  )
}
