import styles from "@/app/page.module.scss";
import { Card } from "@/components/Card";
import { Search } from "@/components/Search";
import { Filter } from "@/components/Filter";
import { CountryInterface } from "@/interfaces";
import { useContext, useEffect, useState } from "react";
import { useFecthCountries } from "@/hooks/useFetchCountries";
import { useFecthCountry } from "@/hooks/useFetchCountry";
import { MainLayout } from "@/layouts/MainLayout";
import { darkmodeContext } from "@/context/darkmode";


export default function Home(props: { data: CountryInterface[] }) {

  const [filterByRegion, setFilterByRegion] = useState<string>('Europe');
  const [searchCountry, setSearchCountry] = useState<string>('');
  const [data, setData] = useState<CountryInterface[]>([]);
  const darkmode = useContext(darkmodeContext);

  const getCountries = () => {
    useFecthCountries(filterByRegion).then((countries) => {
      setData(countries);
    }).catch(error => setData([]));
  }
  const getCountry = () => {
    useFecthCountry(searchCountry).then((country) => {
      setData(country);
    }).catch(error => setData([]));
  }

  useEffect(() => getCountries(), [filterByRegion]);
  useEffect(() => (searchCountry.trim().length <= 0) ? getCountries() : getCountry(), [searchCountry]);

  return (
    <MainLayout title="Home">
      <div className={styles.actionsContainer} data-theme={darkmode.activeDarkMode ? 'dark' : ''}>
        <Search setSearch={setSearchCountry} />
        <Filter setFilter={setFilterByRegion} filter={filterByRegion} />
      </div>
      <div className={styles.cardContainer} data-theme={darkmode.activeDarkMode ? 'dark' : ''}>
        {
          (data && data.length > 0) ? data.map((country: CountryInterface, index: number) => {
            return <Card key={index} {...country} />
          }) : <div className={styles.fallbackText}><h1>No data found, please try with another country</h1></div>
        }
      </div>
    </MainLayout>
  )
}
