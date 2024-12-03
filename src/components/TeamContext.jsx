import { createContext, useContext } from "react";
const DataContext = createContext();

export const Providers = ({ children }) => {

  return (
    <DataContext.Provider
      value={{ }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useTeamContext = () => useContext(DataContext);
