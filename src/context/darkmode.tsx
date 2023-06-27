import { createContext } from "react";


export const darkmodeContext = createContext({
    activeDarkMode: false,
    setDarkMode: (value: boolean) => {}
});