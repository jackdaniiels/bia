import { CountryInterface } from "@/interfaces";

export const useFecthCountry = async (searchCountry: string) => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${searchCountry}`);
        const data: CountryInterface[] = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
};