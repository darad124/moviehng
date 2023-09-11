import FeaturedMovieContainer from "./featured-movie-container";

const FeaturedMovieContainer2 = () => {
  return (
    <div className="absolute top-[670px] left-[0px] w-[1342px] overflow-hidden flex flex-col items-end justify-center text-left text-17xl text-black font-dm-sans">
      <div className="relative w-[1308px] h-[604px]">
        <div className="absolute top-[0px] left-[64px] w-[1244px] flex flex-row items-center justify-between">
          <b className="relative">Featured Movie</b>
          <div className="flex flex-row items-center justify-start gap-[8px] text-lg text-rose-700">
            <div className="relative leading-[24px]">See more</div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/chevron-right.svg"
            />
          </div>
        </div>
        <FeaturedMovieContainer
          posterImage="/poster-image1@2x.png"
          favorite="/favorite1.svg"
          uSA2016Current="USA, 2016 - Current"
          strangerThings="Stranger Things"
          prop="86.0 / 100"
          prop1="97%"
          actionAdventureHorror="Action, Adventure, Horror"
          posterImage1="/poster-image2@2x.png"
          favorite1="/favorite1.svg"
          uSA2016Current1="USA, 2005"
          strangerThings1="Batman Begins"
          prop2="82.0 / 100"
          prop3="70%"
          actionAdventureHorror1="Action, Adventure"
          posterImage2="/poster-image3@2x.png"
          favorite2="/favorite1.svg"
          uSA2016Current2="USA, 2018"
          strangerThings2="Spider-Man : Into The Spider Verse"
          prop4="84.0 / 100"
          prop5="87%"
          actionAdventureHorror2="Animation, Action, Adventure"
          posterImage3="/poster-image4@2x.png"
          favorite3="/favorite1.svg"
          uSA2016Current3="USA, 2017"
          strangerThings3="Dunkirk"
          prop6="78.0 / 100"
          prop7="94%"
          actionAdventureHorror3="Action, Drama, History"
          showTVSeries
          showTVSeries1={false}
        />
        <img
          className="absolute top-[252px] left-[0px] w-12 h-12 overflow-hidden"
          alt=""
          src="/chevron-right1.svg"
        />
      </div>
    </div>
  );
};

export default FeaturedMovieContainer2;
