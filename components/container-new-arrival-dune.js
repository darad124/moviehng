import FeaturedMovieContainer from "./featured-movie-container";

const ContainerNewArrivalDune = () => {
  return (
    <div className="relative w-[1306px] h-[513px]">
      <FeaturedMovieContainer
        posterImage="/poster-image5@2x.png"
        favorite="/favorite.svg"
        uSA2016Current="USA, 2021"
        strangerThings="Dune"
        prop="84.0 / 100"
        prop1="75%"
        actionAdventureHorror="Action, Adventure, Drama"
        posterImage1="/poster-image6@2x.png"
        favorite1="/favorite.svg"
        uSA2016Current1="USA, 2021"
        strangerThings1="No Time To Die"
        prop2="76.0 / 100"
        prop3="68%"
        actionAdventureHorror1="Action, Adventure, Thriller"
        posterImage2="/poster-image7@2x.png"
        favorite2="/favorite.svg"
        uSA2016Current2="USA, 2021"
        strangerThings2="Shang-Chi and the Legend of the Ten Rings"
        prop4="79.0 / 100"
        prop5="71%"
        actionAdventureHorror2="Action, Adventure, Fantasy"
        posterImage3="/poster-image8@2x.png"
        favorite3="/favorite.svg"
        uSA2016Current3="USA, 2021"
        strangerThings3="Don't Breathe 2"
        prop6="61.0 / 100"
        prop7="46%"
        actionAdventureHorror3="Action, Drama, Horror "
        showTVSeries={false}
        uSA2016Top="0px"
        showTVSeries1={false}
      />
      <img
        className="absolute top-[296px] left-[0px] w-12 h-12 overflow-hidden"
        alt=""
        src="/chevron-right1.svg"
      />
    </div>
  );
};

export default ContainerNewArrivalDune;
