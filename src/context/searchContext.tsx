"use client"
import { createContext, useContext, useState } from "react";



interface SearchContextType {
    searchTerm: string;
  handleSearch: (term: string) => void;
}
const contextSearch=createContext<SearchContextType | null>(null);

export function useSearch() {
  const context = useContext(contextSearch);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export const SearchProvider=({children}:{children:React.ReactNode})=>{
    const [searchTerm,setSearchTerm]=useState(""); 

    const handleSearch=(term:string)=>{
        setSearchTerm(term);
    }
    const value={ searchTerm,
        handleSearch
    }
    return(
        <contextSearch.Provider value={value}>
            {children}
        </contextSearch.Provider>
    )
}
export default contextSearch;