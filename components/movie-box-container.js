import React, { useState } from 'react';
import axios from 'axios';
import Logo from "./logo";
import { useRouter } from 'next/router';

const MovieBoxContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const router = useRouter();
  const [resultClicked, setResultClicked] = useState(false); // Add this line

  const handleSearchChange = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);
  
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${term}`, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWMzOTlmNzY0NWUzZTI5OGM3ZDk2NjYwMmRmMjJlNSIsInN1YiI6IjY0ZmY1N2I3ZGI0ZWQ2MTAzNjNlN2I0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5rFXnu9548fxjCagEpsamuWrM7iZdSidT7KDciyJkA',
          'accept': 'application/json'
        }
      });
  
      const movies = response.data.results.slice(0, 4); // Get only the first four movies
  
      // Log all data of the four movies
      movies.forEach(movie => console.log(movie));
  
      setSearchResults(movies);
    } catch (error) {
      console.error('Failed to search movies:', error);
    }
  };
  

  const handleResultClick = async (movie) => {
    if (!movie || !movie.id) {
      console.error('Movie or movie ID is undefined.');
      return;
    }
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos`, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWMzOTlmNzY0NWUzZTI5OGM3ZDk2NjYwMmRmMjJlNSIsInN1YiI6IjY0ZmY1N2I3ZGI0ZWQ2MTAzNjNlN2I0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5rFXnu9548fxjCagEpsamuWrM7iZdSidT7KDciyJkA',
          'accept': 'application/json'
        }
      });
  
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
  
  
  
  return (
    <div className="absolute top-[0px] left-[0px] w-[1440px] h-[600px] overflow-hidden flex flex-col items-center justify-start text-left text-base text-white font-dm-sans">
      <div className="relative w-[1440px] h-20">
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-20" />
        <div className="absolute top-[20px] left-[491px] rounded-md box-border w-[529px] flex flex-row py-1.5 px-2.5 items-center justify-between border-[2px] border-solid border-gray-300">
          <input type="text" value={searchTerm} onChange={handleSearchChange} onBlur={() => setSearchResults([])} className="relative leading-[24px] bg-transparent w-full" />
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/search.svg"
          />
        </div>
        {searchResults.length > 0 && (
          <div className="absolute top-[60px] left-[491px] rounded-md box-border w-[529px] bg-gray-800 text-white">
            {searchResults.map((result, index) => (
           <div key={index} onClick={() => handleResultClick(result)} className="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-700">
           <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.title} className="float-left w-16 h-16 mr-2" />
           <h2>{result.title}</h2>
           <p>{result.overview}</p>
         </div>
         
            ))}
          </div>
        )}
        <div className="absolute top-[22px] left-[1228px] flex flex-row items-center justify-start gap-[27px]">
          <b className="relative leading-[24px]">Sign in</b>
          <img className="relative w-9 h-9" alt="" src="/menu.svg" />
        </div>
        <Logo
          logoPosition="absolute"
          logoTop="15px"
          logoLeft="95px"
          logoHeight="unset"
          logoWidth="unset"
          logoRight="unset"
          logoBottom="unset"
          movieBoxColor="#fff"
        />
      </div>
    </div>
  );
};

export default MovieBoxContainer;
