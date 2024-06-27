import { createContext,useContext,useEffect, useState } from "react";
import React from "react";



const API_URL='https://www.omdbapi.com/?apikey=2f98c180';

const AppContext = createContext();

const AppProvider=({children})=>{
    const [isLoading,setIsLoading]=useState(true);
    const [movie,setMovie] =useState([]);
    const [isError,setIsError]=useState({ show:"false", msg:""});
    const [query,setQuery] =useState("indian");
    const [frttheme,setFrttheme]=useState("dark-theme");
    
    const getmovies=async(url)=>{
        try {
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            if(data.Response==="True"){
                setIsLoading(false);
                setMovie(data.Search);
            }
            else{
                setIsError({
                    show:true,
                    msg:data.Error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        let timerout =setTimeout(()=>{
            getmovies(`${API_URL}&s=${query}`);},1000);
        return ()=> clearTimeout(timerout);
    },[query]);
    return <AppContext.Provider value={{isLoading, isError, movie, query, setQuery,frttheme,setFrttheme}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () =>{
    return useContext(AppContext);
}


export { AppContext,AppProvider,useGlobalContext };