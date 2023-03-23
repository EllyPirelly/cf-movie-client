import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      description: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
      directorName: 'Jonathan Demme',
      genreName: 'Thriller',
      imagePath: 'https://m.media-amazon.com/images/I/71h9vFHWXFL._AC_SL1000_.jpg',
      title: 'The Silence of the Lambs'
    },
    {
      id: 2,
      description: 'In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.',
      directorName: 'Luc Besson',
      genreName: 'Sci-Fi',
      imagePath: 'https://m.media-amazon.com/images/I/51DRLw0ibLL._AC_.jpg',
      title: 'The Fifth Element'
    },
    {
      id: 3,
      description: 'A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity\'s future salvation.',
      directorName: 'James Cameron',
      genreName: 'Sci-Fi',
      imagePath: 'https://m.media-amazon.com/images/I/61qCgQZyhOL._AC_SL1024_.jpg',
      title: 'Terminator',
    },
    {
      id: 4,
      description: 'A wheelchair-bound photographer spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.',
      directorName: 'Alfred Hitchcock',
      genreName: 'Thriller',
      imagePath: 'https://m.media-amazon.com/images/I/71QlJsCofIL._AC_SL1200_.jpg',
      title: 'Rear Window'
    },
    {
      id: 5,
      description: 'In the fictional town of Ebbing, Missouri, Mildred Hayes is grieving over the rape and murder of her teenage daughter, Angela, seven months earlier. Angry over the lack of progress in the investigation, she rents three disused billboards near her home and posts on them: \"Raped While Dying\", \"And Still No Arrests?\", \"How Come, Chief Willoughby?\".',
      directorName: 'Martin McDonagh',
      genreName: 'Crime Drama',
      imagePath: 'https://m.media-amazon.com/images/I/51XM+pFVtsL._AC_SL1304_.jpg',
      title: 'Three Billboards Outside Ebbing, Missouri'
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => {
          setSelectedMovie(null);
        }}
      />
    );
  }

  if (movies.length === 0) {
    return (
      <div>The list is empty.</div>
    )
  };

  return (
    <div>
      {
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
          />
        ))
      }
    </div>
  );
};
