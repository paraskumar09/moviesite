import React from 'react'
import { useParams } from 'react-router-dom';
import { api } from './Context';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
const MovieDetail = () => {

  const {id}=useParams()
  const [isLoadding,setLoading]=useState(true);
  const [movie,setMovie]=useState([]);

  const getMovies=async(url)=>{
      try{
        setLoading(true);
          const res=await fetch(url);
          const data=await res.json();
          console.log(data);

          setLoading(false);
         
          if(data.Response==="True")
            {
              setMovie(data);
            }
      }
      catch(err)
      {
        console.log(err)
      }
  }

 useEffect(()=>{
  const timeOut=setTimeout(()=>{
    getMovies(`${api}&i=${id}`);
  },350)
  
  return ()=>clearTimeout(timeOut);
 },[id])
  
  return (
   <section className="py-44 ">
  <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-16 items-start gap-30 lg:flex md:px-8 border p-10  ">
  <div className="sm:hidden lg:block lg:max-w-xl">
    <img src={movie.Poster} className="rounded-lg" alt="" />
  </div>
  <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
    <div className="max-w-2xl">
      <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
        {movie.Title}
      </h3>
      <p className="mt-3 max-w-xl">
        {movie.Plot}
      </p>
    </div>
    <div className="flex-none mt-6 md:mt-0 lg:mt-6">
      <ul className="inline-grid gap-y-4 gap-x-14 grid-cols-3">
        <li className="">
          <h4 className="text-lg text-indigo-600 font-semibold">IMDB Rating</h4>
          <p className="mt-3 font-medium">{movie.imdbRating}</p>
        </li>
        <li className="">
          <h4 className="text-lg text-indigo-600 font-semibold">Actors</h4>
          <p className="mt-3 font-medium">{movie.Actors}</p>
        </li>
        <li className="">
          <h4 className="text-lg text-indigo-600 font-semibold">Language</h4>
          <p className="mt-3 font-medium">{movie.Language}</p>
        </li>
        <li className="">
          <h4 className="text-lg text-indigo-600 font-semibold">Released Date</h4>
          <p className="mt-3 font-medium">{movie.Released}</p>
        </li>
        <li className="">
          <h4 className="text-lg text-indigo-600 font-semibold">Genre</h4>
          <p className="mt-3 font-medium">{movie.Genre}</p>
        </li>
        <li className="">
          <h4 className="text-lg text-indigo-600 font-semibold">Rated</h4>
          <p className="mt-3 font-medium">{movie.Rated}</p>
        </li>
      </ul>
    </div>
  </div>
</div>

</section>

  )

}

export default MovieDetail;