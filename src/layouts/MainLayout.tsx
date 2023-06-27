import { Navbar } from '@/components/Navbar';
import Head from 'next/head';
import { FC, useState } from 'react';
import styles from '@/app/page.module.scss';
import { darkmodeContext } from '@/context/darkmode';

interface Props {
    children: React.ReactNode;
    title: string;
}

export const MainLayout: FC<Props> = ({ children, title }: Props) => {

    const [activeDarkMode, setDarkMode] = useState(false);

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="country, capital, population, currency" />
                <meta name="keywords" content="Countries, search country" />
                <meta name="author" content="Felipe Manchego" />
            </Head>
            <darkmodeContext.Provider value={{ activeDarkMode, setDarkMode }}>
                <Navbar />
                <main className={styles.main} data-theme={activeDarkMode ? 'dark' : ''}>{children}</main>
            </darkmodeContext.Provider>
        </>
    )
}