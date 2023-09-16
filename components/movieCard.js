import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';



// Placeholder for genreMapping
const genreMapping = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'
  };
  
  const MovieCard = (
    {movie, posterImage, title, releaseDate, rating, popularity, genres, className,setSelectedMovie }) => {
    const [trailerUrl, setTrailerUrl] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        if (!movie || !movie.id) {
          console.error('Movie or movie ID is undefined.');
          return;
        }
        const { title, overview, release_date, vote_average, runtime, genres } = movie;
  // Pass only these properties to the setSelectedMovie function
  setSelectedMovie({ title, overview, release_date, vote_average, runtime, genres });;
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos`, {
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWMzOTlmNzY0NWUzZTI5OGM3ZDk2NjYwMmRmMjJlNSIsInN1YiI6IjY0ZmY1N2I3ZGI0ZWQ2MTAzNjNlN2I0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5rFXnu9548fxjCagEpsamuWrM7iZdSidT7KDciyJkA', // Replace with your TMDb API key
              'accept': 'application/json'
            }
          });
      
          console.log(response.data.results); // Log all videos
      
          const trailer = response.data.results.find(video => video.type === 'Trailer');
      
          if (trailer) {
            const trailerUrl = `https://www.youtube.com/embed/${trailer.key}`;

            router.push(`/movies1?trailerUrl=${encodeURIComponent(trailerUrl)}`);
          } else {
            console.error('No trailer available for this movie.');
          }
        } catch (error) {
          console.error('Failed to fetch movie trailer:', error);
        }
      };
      
  
    const handleFavoriteClick = (event) => {
      event.stopPropagation(); // Prevent the click event from bubbling up to the parent
      setIsFavorite(!isFavorite); // Toggle the favorite status
    };
  
    // Map genre IDs to their names
    const genreNames = genres.map(genreId => genreMapping[genreId]);
  
    console.log(`Genres for ${title}:`, genreNames); // Log the genre names
  
    return (
        <div className={`w-230 h-490 ${className} transition-transform duration-500 ease-in-out transform hover:scale-105`} onClick={handleClick}> {/* Adjust the width and height here */}
          <div className="relative">
            <img src={posterImage} alt={title} className="w-full h-full" /> {/* Make sure the image takes the full width and height of the card */}
            <button onClick={handleFavoriteClick} className="absolute p-2 bg-gray-500 rounded-full top-4 right-4 opacity-70 hover:opacity-100">
              <FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} className="text-white" size="lg" />
            </button> {/* Add an interactive favorite button to the top right of the image */}
          </div>
          <h2 className="font-black text-black">{title}</h2>
          <p>Release Date: {releaseDate}</p>
          <p>
          <img
            className="relative w-[35px] h-[17px] object-cover"
            alt=""
            src="/mv5bmtk3oda4mjc0nf5bml5bcg5nxkftztgwndc1mzq2ote-11@2x.png"
          /> {/* Add a tomato icon before the rating */}
            Rating: {rating * 10}/100
    </p> {/* Multiply rating by 10 to get a score out of 100 */}
    <p><img
            className="relative w-4 h-[17px] object-cover"
            alt=""
            src="/pngitem-1381056-11@2x.png"
          /> Popularity: {popularity}</p>
    <p>Genres: {genreNames.join(', ')}</p> {/* Display genre names instead of IDs */}
  </div>
    );
};
  
export default MovieCard;

