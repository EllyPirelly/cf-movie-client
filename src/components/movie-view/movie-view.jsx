export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.imagePath} className="movie-card__img" alt="" />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <div>
        <div>
          <span>Genre: </span>
          <span>{movie.genre.genreName}</span>
        </div>
        <div>
          <span>Genre Description: </span>
          <span>{movie.genre.description}</span>
        </div>
      </div>
      <div>
        <div>
          <span>Director: </span>
          <span>{movie.director.directorName}</span>
        </div>
        <div>
          <span>Bio: </span>
          <span>{movie.director.bio}</span>
        </div>
      </div>

      <button onClick={onBackClick}>Back</button>
    </div>
  );
};