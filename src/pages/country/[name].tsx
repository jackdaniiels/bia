import { CountryInterface } from '@/interfaces';
import { GetStaticProps, NextPage } from 'next';
import styles from "@/app/page.module.scss";

interface Props {
    country: CountryInterface[];
}

const CountryPage: NextPage<Props> = ({ country }) => {
    const [data] = country;
    const { flags, name } = data || { flag: '', name: '' };

    return (
        <MainLayout title={name.common}>
            <div className={styles.backButtonContainer}>
                <BackButton />
            </div>
            {
                flags && <div className={styles.detailContainer}>
                    <Image
                        src={flags.png}
                        width={561}
                        height={402}
                        alt={name.common + ' flag'}
                        loading='lazy'
                        className={ styles.image }
                    />
                    {
                        (country && country[0].area) && <CountryDetails country={country[0]} />
                    }
                </div>
            }
        </MainLayout>
    )
}

export default CountryPage;

import { GetStaticPaths } from 'next';
import Image from 'next/image';
import { CountryDetails } from '@/components/CountryDetails';
import BackButton from '@/components/BackButton';
import { MainLayout } from '@/layouts/MainLayout';
import { countryCodes } from '@/utils/countryCodes';


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const codes = countryCodes.map((countryName) => `${countryName}`);

    return {
        paths: codes.map(countryName => (
            {
                params: {
                    name: countryName,
                    data: []
                }
            }
        )),
        fallback: false
    }
}


export const getStaticProps: GetStaticProps = async (ctx) => {
    const { name } = ctx.params as any;
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const country: CountryInterface[] = await res.json();

        return {
            props: {
                country
            }
        }
    } catch (error) {
        console.log(error);
        return {
            props: {
                country: []
            }
        }
    }
}

