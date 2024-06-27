import React from 'react'
import { useGlobalContext } from '../../Context/Context.jsx';
import { Link } from 'react-router-dom';
import './Movies.css';

const Movies = () => {
  const { movie,isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>
      </section>
    );
  }
  return (
    <>
      <section className='movie-page'>
        <div className="moviepage-container">
        {movie.map((currMovie)=>{
          const {imdbID,Title,Poster} =currMovie;
          const movieName=Title.substring(0,18);
        return <Link to={`movie/${imdbID}`} key={imdbID} className='link'>
          <div className='moviepage-item'>
            <div className="card-title">
              {movieName.length>15? `${movieName}....`:movieName}
            </div>
            <div className="poster">
              <img src={Poster} alt={imdbID} />
            </div>
            
            
          </div>
          </Link>
      })}
        </div>
      </section>
      
    </>
  )
}

export default Movies