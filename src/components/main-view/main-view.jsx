import { useState } from 'react';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';

const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      description: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
      director: {
        directorName: 'Jonathan Demme',
        bio: 'Robert Jonathan Demme was an American director, producer, and screenwriter.'
      },
      genre: {
        genreName: 'Thriller',
        description: 'Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience. Tension is created by delaying what the audience sees as inevitable, and is built through situations that are menacing or where escape seems impossible.'
      },
      imagePath: 'https://m.media-amazon.com/images/I/71h9vFHWXFL._AC_SL1000_.jpg',
      title: 'The Silence of the Lambs'
    },
    {
      id: 2,
      description: 'In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon to keep Evil and Mr. Zorg at bay.',
      director: {
        directorName: 'Luc Besson',
        bio: 'Luc Paul Maurice Besson is a French film director, screenwriter and producer. He directed or produced the films Subway (1985), The Big Blue (1988), and La Femme Nikita (1990). Associated with the Cinéma du look film movement, he has been nominated for a César Award for Best Director and Best Picture for his films Léon: The Professional (1994) and the The Messenger: The Story of Joan of Arc (1999). He won Best Director and Best French Director for his sci-fi action film The Fifth Element (1997). He wrote and directed the 2014 sci-fi action film Lucy and the 2017 space opera film Valerian and the City of a Thousand Planets.'
      },
      genre: {
        genreName: 'Sci-Fi',
        description: 'Science fiction (sometimes shortened to sf or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.'
      },
      imagePath: 'https://m.media-amazon.com/images/I/51DRLw0ibLL._AC_.jpg',
      title: 'The Fifth Element'
    },
    {
      id: 3,
      description: 'A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity\'s future salvation.',
      director: {
        directorName: 'James Cameron',
        bio: 'James Francis Cameron is a Canadian filmmaker. A major figure in the post-New Hollywood era, he is considered one of the industry\'s most innovative filmmakers, regularly pushing the boundaries of cinematic capability with his use of novel technologies. He first gained recognition for writing and directing The Terminator (1984) and found further success with Aliens (1986), The Abyss (1989), Terminator 2: Judgment Day (1991), and the action comedy True Lies (1994). He wrote and directed Titanic (1997), Avatar (2009) and its sequels, with Titanic earning him Academy Awards for Best Picture, Best Director and Best Film Editing. A recipient of various other industry accolades, two of his films have been selected for preservation in the National Film Registry by the Library of Congress.'
      },
      genre: {
        genreName: 'Sci-Fi',
        description: 'Science fiction (sometimes shortened to sf or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life.'
      },
      imagePath: 'https://m.media-amazon.com/images/I/61qCgQZyhOL._AC_SL1024_.jpg',
      title: 'Terminator',
    },
    {
      id: 4,
      description: 'A wheelchair-bound photographer spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.',
      director: {
        directorName: 'Alfred Hitchcock',
        bio: 'Sir Alfred Joseph Hitchcock was an English filmmaker. He is widely regarded as one of the most influential figures in the history of cinema. In a career spanning six decades, he directed over 50 feature films, many of which are still widely watched and studied today.'
      },
      genre: {
        genreName: 'Thriller',
        description: 'Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience. Tension is created by delaying what the audience sees as inevitable, and is built through situations that are menacing or where escape seems impossible.'
      },
      imagePath: 'https://m.media-amazon.com/images/I/71QlJsCofIL._AC_SL1200_.jpg',
      title: 'Rear Window'
    },
    {
      id: 5,
      description: 'In the fictional town of Ebbing, Missouri, Mildred Hayes is grieving over the rape and murder of her teenage daughter, Angela, seven months earlier. Angry over the lack of progress in the investigation, she rents three disused billboards near her home and posts on them: \"Raped While Dying\", \"And Still No Arrests?\", \"How Come, Chief Willoughby?\".',
      director: {
        directorName: 'Martin McDonagh',
        bio: 'Martin Faranan McDonagh is a British-Irish playwright and filmmaker. He is known for his absurdist black humour which often challenges the modern theatre aesthetic. He has received numerous accolades including an Academy Award, six BAFTA Awards, four Golden Globe Awards, three Olivier Awards, and nominations for five Tony Awards.'
      },
      genre: {
        genreName: 'Crime Drama',
        description: 'Crime dramas explore themes of truth, justice, and freedom, and contain the fundamental dichotomy of \"criminal vs. lawman\". Crime films make the audience jump through a series of mental \"hoops\"; it is not uncommon for the crime drama to use verbal gymnastics to keep the audience and the protagonist on their toes.'
      },
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

export default MainView;