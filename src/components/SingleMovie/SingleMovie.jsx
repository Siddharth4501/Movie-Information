import { NavLink, useParams } from "react-router-dom";
import useFetch from "../../useFetch.jsx";
import '../SingleMovie/SingleMovie.css'
const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, movie } = useFetch(id);

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          
          
        <div>
        
        <p className="card-text"><b>Released:</b> {movie.Released}</p>
        <p className="card-text"><b>BoxOffice:</b> {movie.BoxOffice}</p>
        <p className="card-text"><b>Director:</b> {movie.Director}</p>
        <p className="card-text"><b>Genre:</b> {movie.Genre}</p>
        <p className="card-text"><b>imdbRating:</b> {movie.imdbRating} / 10</p>
        <p className="card-text"><b>Country:</b> {movie.Country}</p>
            
        </div>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
          
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;