import React, { useContext } from 'react';
import { CountryInterface, Currencies } from '@/interfaces/countries.interfaces';
import styles from '@/theme/components/countrydetails.module.scss';
import { NextPage } from 'next';
import { darkmodeContext } from '@/context/darkmode';

interface CountryDetailsProps {
    country: CountryInterface;
}

export const CountryDetails: NextPage<CountryDetailsProps> = ({ country }) => {
    const darkmode = useContext(darkmodeContext);

    const { name, capital, region, subregion, population, currencies, languages, borders, cioc , cca3} = country;
    const dinamicSioc =  cioc?.toLowerCase() || '';
    const dinamicCurrency = Object.keys(currencies)[0] as keyof Currencies;
    const dinamicNativeName = Object.values(name)[0];

    return (
        <div>
            <h1 className={ styles.title } data-theme={darkmode.activeDarkMode ? 'dark' : ''}>{name.common}</h1>
            <div className={styles.detailsContainer} data-theme={darkmode.activeDarkMode ? 'dark' : ''}>
                <ul className={styles.list} data-theme={darkmode.activeDarkMode ? 'dark' : ''}>
                    <li><strong>Native name: </strong>{dinamicNativeName}</li>
                    <li><strong>Population: </strong>{population}</li>
                    <li><strong>Region: </strong>{region}</li>
                    <li><strong>Sub Region: </strong>{subregion}</li>
                    <li><strong>Capital: </strong>{capital}</li>
                </ul>
                <ul className={styles.list} data-theme={darkmode.activeDarkMode ? 'dark' : ''}>
                    <li><strong>Top Level Domain: </strong>{name.common}</li>
                    <li><strong>Currencies: </strong> {currencies[dinamicCurrency]?.name}</li>
                    <li><strong>Languages: </strong>{(languages as any)[dinamicSioc]}</li>
                </ul>
            </div>
            <div className={styles.bordersContainer}>
                <h3 className={ styles. subtitle } data-theme={darkmode.activeDarkMode ? 'dark' : ''}>Border Countries:</h3>
                <ul className={styles.borders} data-theme={darkmode.activeDarkMode ? 'dark' : ''}>
                    {borders && borders.map((border, index) => (
                        <li key={index}>{border}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
