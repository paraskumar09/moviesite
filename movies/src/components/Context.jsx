import React, { Children } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';

const AppContext=React.createContext();
export const api=`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`;


const AppProvider=({children})=>{

  const [isLoadding,setLoading]=useState(true);
  const [movie,setMovie]=useState([]);
  const [isError,setError]=useState({show:false,msg:""});
  const [query,setQuery]=useState("game");

  const skell=[{
    imdbID:0,
    Title:"",
    Poster:""
   },{
    imdbID:1,
    Title:"",
    Poster:""
   },{
    imdbID:2,
    Title:"",
    Poster:""
   },{
    imdbID:3,
    Title:"",
    Poster:""
   },{
    imdbID:4,
    Title:"",
    Poster:""
   }]

  const getMovies=async(url)=>{
      try{
          setMovie(skell);
          const res=await fetch(url);
          const data=await res.json();
          console.log(data);
         
          if(data.Response==="True")
            {
              setMovie(data.Search);
              setError({
                show:false,
                msg:[]
              })
            }
            else{
              setError({
              show:true,
              msg:data.Error
             })
             setMovie([{
              imdbID:0,
              Title:data.Error,
              Poster:"https://assets.gcore.pro/blog_containerizing_prod/uploads/2023/09/error-404-how-to-fix-it-fi.png"
             }]);
            }
      }
      catch(err)
      {
        console.log(err)
      }
  }

 useEffect(()=>{
  const timeOut=setTimeout(()=>{
    getMovies(`${api}&s=${query}`);
  },350)
  
  return ()=>clearTimeout(timeOut);
 },[query])
  
  return <AppContext.Provider value={{isLoadding,isError,movie,query,setQuery}}>
      {children}
  </AppContext.Provider>;
};

const useGlobal=()=>{
  return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobal};