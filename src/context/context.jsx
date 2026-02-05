
import { createContext } from "react";
import moviesData from "../json/Data.json";
import couress from '../constant/data';
export const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  return (
    <MoviesContext.Provider value={couress}>
      {children}
    </MoviesContext.Provider>







  );
}









