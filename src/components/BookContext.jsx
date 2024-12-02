import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
const BookDataContext = createContext();

export const BookProviders = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [update, setUpdate] = useState(0);
  return (
    <BookDataContext.Provider
      value={{ navigate, error, setError, books, setBooks, update, setUpdate }}
    >
      {children}
    </BookDataContext.Provider>
  );
};

export const useBook = () => useContext(BookDataContext);
