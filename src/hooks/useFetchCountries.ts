import { CountryInterface } from "@/interfaces";

export const useFecthCountries = async (filterByRegion: string) => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/region/${filterByRegion}`);
        const data: CountryInterface[] = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
};