import { useState, createContext, useEffect } from "react";

export const jsearchContext = createContext();

const JSearchContextProvider = ({ children, query, filter }) => {
  const [result, setResult] = useState({
    isLoading: false,
    data: [],
    error: "",
  });

  useEffect(() => {
    const filters = Object.entries(filter)
      .map((item) => item.join("="))
      .join("&");

    const getResult = async () => {
      const url = `https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=1&${filters}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const res = await response.json();
        setResult((value) => ({ ...value, data: res.data, error: "" }));
      } catch (error) {
        setResult((value) => ({ ...value, data: [], error: error.message }));
      } finally {
        setResult((value) => ({ ...value, isLoading: false }));
      }
    };

    if (query) getResult();
  }, [query, filter]);

  return (
    <jsearchContext.Provider value={result.data}>
      {children}
    </jsearchContext.Provider>
  );
};

export default JSearchContextProvider;
