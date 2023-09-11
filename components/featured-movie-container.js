import { useMemo } from "react";
import MovieCard from "/";

const FeaturedMovieContainer = ({
  posterImage,
  favorite,
  uSA2016Current,
  strangerThings,
  prop,
  prop1,
  actionAdventureHorror,
  posterImage1,
  favorite1,
  uSA2016Current1,
  strangerThings1,
  prop2,
  prop3,
  actionAdventureHorror1,
  posterImage2,
  favorite2,
  uSA2016Current2,
  strangerThings2,
  prop4,
  prop5,
  actionAdventureHorror2,
  posterImage3,
  favorite3,
  uSA2016Current3,
  strangerThings3,
  prop6,
  prop7,
  actionAdventureHorror3,
  showTVSeries,
  uSA2016Top,
  showTVSeries1,
}) => {
  const movieListStyle = useMemo(() => {
    return {
      top: uSA2016Top,
    };
  }, [uSA2016Top]);

  return (
    <div
      className="absolute top-[91px] left-[64px] flex flex-row items-start justify-start gap-[80px]"
      style={movieListStyle}
    >
      <MovieCard
        posterImage="/poster-image1@2x.png"
        favorite="/favorite1.svg"
        uSA2016Current="USA, 2016 - Current"
        strangerThings="Stranger Things"
        prop="86.0 / 100"
        prop1="97%"
        actionAdventureHorror="Action, Adventure, Horror"
        showTVSeries
      />
      <MovieCard
        posterImage="/poster-image2@2x.png"
        favorite="/favorite1.svg"
        uSA2016Current="USA, 2005"
        strangerThings="Batman Begins"
        prop="82.0 / 100"
        prop1="70%"
        actionAdventureHorror="Action, Adventure"
        showTVSeries={false}
      />
      <MovieCard
        posterImage="/poster-image3@2x.png"
        favorite="/favorite1.svg"
        uSA2016Current="USA, 2018"
        strangerThings="Spider-Man : Into The Spider Verse"
        prop="84.0 / 100"
        prop1="87%"
        actionAdventureHorror="Animation, Action, Adventure"
        showTVSeries={false}
      />
      <MovieCard
        posterImage="/poster-image4@2x.png"
        favorite="/favorite1.svg"
        uSA2016Current="USA, 2017"
        strangerThings="Dunkirk"
        prop="78.0 / 100"
        prop1="94%"
        actionAdventureHorror="Action, Drama, History"
        showTVSeries={false}
      />
    </div>
  );
};

export default FeaturedMovieContainer;
