import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
const DataContext = createContext();

export const Providers = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [update, setUpdate] = useState(0);
  return (
    <DataContext.Provider
      value={{ navigate, error, setError, books, setBooks, update, setUpdate }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useTeamContext = () => useContext(DataContext);
