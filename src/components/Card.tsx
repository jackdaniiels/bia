import React, { useContext } from 'react';
import styles from '@/theme/components/card.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { darkmodeContext } from '@/context/darkmode';


export const Card = (props: any) => {
  const darkmode = useContext(darkmodeContext);
  const { flags, capital, region, name, population } = props;
  const router = useRouter();

  const onClick = () => {
    router.push(`/country/${name.common}`);
  };


  return (
    <div className={styles.animatedFadeIn}>
      <div className={styles.card} 
      onClick={onClick} 
      data-theme={darkmode.activeDarkMode ? 'dark' : ''}>
        <Image
          src={flags.png}
          width={264}
          height={160}
          alt={name.common + ' flag'}
          loading='lazy'
        />
        <div className={styles.cardTextContainer}>
          <h3>{name.common} { }</h3>
          <ul>
            <li>
              <strong>Population: </strong> {population}
            </li>
            <li>
              <strong>Region: </strong> {region}
            </li>
            <li>
              <strong>Capital: </strong> {capital}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

