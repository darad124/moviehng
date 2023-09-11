const MovieCard = ({
  posterImage,
  favorite,
  uSA2016Current,
  strangerThings,
  prop,
  prop1,
  actionAdventureHorror,
  showTVSeries,
}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[12px] text-left text-xs text-gray-900 font-dm-sans">
      <div className="relative w-[250px] h-[370px]">
        <img
          className="absolute top-[0px] left-[0px] w-[250px] h-[370px] object-cover"
          alt=""
          src={posterImage}
        />
        <div className="absolute top-[15.58px] left-[16px] w-[218px] h-[29.21px]">
          {showTVSeries && (
            <div className="absolute top-[3.61px] left-[0px] rounded-xl bg-whitesmoke [backdrop-filter:blur(2px)] flex flex-row py-[3px] px-2 items-start justify-start">
              <b className="relative">TV SERIES</b>
            </div>
          )}
          <img
            className="absolute top-[0px] left-[188px] w-[30px] h-[29.21px]"
            alt=""
            src={favorite}
          />
        </div>
      </div>
      <b className="relative text-gray-400">{uSA2016Current}</b>
      <b className="relative text-lg inline-block w-[250px]">
        {strangerThings}
      </b>
      <div className="w-[250px] flex flex-row items-start justify-between">
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <img
            className="relative w-[35px] h-[17px] object-cover"
            alt=""
            src="/mv5bmtk3oda4mjc0nf5bml5bcg5nxkftztgwndc1mzq2ote-1@2x.png"
          />
          <div className="relative leading-[12px]">{prop}</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <img
            className="relative w-4 h-[17px] object-cover"
            alt=""
            src="/pngitem-1381056-1@2x.png"
          />
          <div className="relative leading-[12px]">{prop1}</div>
        </div>
      </div>
      <b className="relative text-gray-400">{actionAdventureHorror}</b>
    </div>
  );
};

export default MovieCard;
