import React from 'react'
import { useGlobal } from './Context'
import { NavLink } from 'react-router-dom';
import Card from './Card';

const Movies = () => {

    const {movie,isLoadding}=useGlobal();
  return (
    <section className="movie-section">
      <div className="flex gap-20 justify-center bg-slate-200 flex-wrap p-24">
        {
          movie.map((currMovie)=>{
            const {imdbID,Title, Poster}=currMovie;

            return <NavLink key={imdbID} to={`movie/${imdbID}`}>
              <Card Title={Title} Poster={Poster}></Card>
            </NavLink>
          })
        }

      </div>
    </section>
  )
}

export default Movies;