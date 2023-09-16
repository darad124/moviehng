import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedMovieContainer from "../components/featured-movie-container";
import FormFooter1 from "../components/form-footer1";
import MovieBoxContainer from "../components/movie-box-container";
import MovieDescriptionContainer1 from "../components/movie-description-container1";

const HomepageDesktop = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWMzOTlmNzY0NWUzZTI5OGM3ZDk2NjYwMmRmMjJlNSIsInN1YiI6IjY0ZmY1N2I3ZGI0ZWQ2MTAzNjNlN2I0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a5rFXnu9548fxjCagEpsamuWrM7iZdSidT7KDciyJkA', // Replace with your TMDb API key
            'accept': 'application/json'
          }
        });
        const movies = response.data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        setMovie(movies[randomIndex]);
      } catch (error) {
        console.error('Failed to fetch movie:', error);
      }
    };

    fetchMovie();
  }, []);

  if (!movie) return null;

  const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <div className="relative bg-white w-full h-[2845px] overflow-hidden text-left text-xs text-gray-400 font-dm-sans">
      <FeaturedMovieContainer />
      <div className="absolute top-[2626px] left-[0px] w-[959px] overflow-hidden flex flex-col items-end justify-center">
        <FormFooter1 />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[600px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[600px] object-cover"
          alt={movie.title}
          src={posterUrl}
        />
        <MovieBoxContainer  />
        <div className="absolute top-[157px] left-[98px] w-[454px] h-[456px] overflow-hidden flex flex-col items-center justify-center">
          <MovieDescriptionContainer1 movie={movie} />
        </div>
        <div className="absolute top-[245px] left-[1380px] w-9 h-[110px] flex flex-row items-center justify-end gap-[6px]">
          <div className="relative rounded-md bg-white w-5 h-[3px]" />
          <div className="flex flex-col items-center justify-start gap-[10px]">
            <b className="relative leading-[14px]">1</b>
            <b className="relative leading-[14px]">2</b>
            <b className="relative text-base leading-[14px] text-white">3</b>
            <b className="relative leading-[14px]">4</b>
            <b className="relative leading-[14px]">5</b>
          </div>
        </div>
      </div>
      <div className="absolute top-[1377px] left-[0px] w-[1402px] overflow-hidden flex flex-col items-end justify-center">
       
      </div>
      
    </div>
    
  );
};

export default HomepageDesktop;
