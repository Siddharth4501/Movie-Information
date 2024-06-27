import React, { useState, useEffect } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=2f98c180`;

const useFetch = (apiParams) => {
  const [isLoading, setIsLoading] = useState(true);
  
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
        
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}&i=${apiParams}`);
    }, 500);
    console.log("set");
    return () => {
      clearTimeout(timeOut);
      console.log("clear");
    };
  }, [apiParams]);

  return { isLoading, movie };
};

export default useFetch;