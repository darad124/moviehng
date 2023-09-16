import { useRouter } from 'next/router';

function MovieDetails() {
  const router = useRouter();
  const { selectedMovie } = router.query;

  // Log the movie object right after it's passed as a prop
  console.log('Movie object passed to MovieDetails:', selectedMovie);

  // Check if movie is not null before trying to access its properties
  if (!selectedMovie) {
    console.log('Movie object is null or undefined.');
    return null;
  }

  const { title, release_date, vote_average, runtime, overview, genres } = selectedMovie;

  // Log each property of the movie object
  console.log('Title:', title);
  console.log('Release date:', release_date);
  console.log('Vote average:', vote_average);
  console.log('Runtime:', runtime);
  console.log('Overview:', overview);
  console.log('Genres:', genres);

  // ...rest of your code...
}

export default MovieDetails;
