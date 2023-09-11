import Logo from "./logo";

const MovieBoxContainer1 = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[226px] h-[982px] text-left text-xl text-dimgray font-poppins">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-tl-none rounded-tr-26xl rounded-br-26xl rounded-bl-none bg-white box-border border-[1px] border-solid border-gray1-100" />
      <Logo
        logoPosition="absolute"
        logoTop="5.3%"
        logoLeft="8.85%"
        logoHeight="5.09%"
        logoWidth="82.3%"
        logoRight="8.85%"
        logoBottom="89.61%"
        movieBoxColor="#333"
      />
      <div className="absolute top-[207px] left-[42px] w-[101px] h-[30px]">
        <div className="absolute h-full w-[60.4%] top-[0%] left-[39.6%] font-semibold inline-block">
          Home
        </div>
        <img
          className="absolute top-[1px] left-[-2px] w-[29px] h-[29px] object-cover"
          alt=""
          src="/home@2x.png"
        />
      </div>
      <div className="absolute top-[284px] left-[0px] w-[226px] h-[86px] text-rose-700">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-crimson-300" />
        <img
          className="absolute h-[109.34%] w-[6.41%] top-[-2.35%] right-[-1.99%] bottom-[-7%] left-[95.58%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-7.svg"
        />
        <div className="absolute h-[34.88%] w-[31.86%] top-[32.56%] left-[36.28%] font-semibold inline-block">
          Movies
        </div>
        <img
          className="absolute top-[28px] left-[42px] w-[25px] h-[25px] object-cover"
          alt=""
          src="/movie-projector@2x.png"
        />
      </div>
      <div className="absolute h-[3.05%] w-[40.71%] top-[42.36%] left-[36.28%] font-semibold inline-block">
        TV Series
      </div>
      <div className="absolute h-[3.05%] w-[46.9%] top-[53.05%] left-[36.28%] font-semibold inline-block">
        Upcoming
      </div>
      <img
        className="absolute top-[417px] left-[40px] w-[29px] h-[29px] object-cover"
        alt=""
        src="/tv-show@2x.png"
      />
      <img
        className="absolute top-[522px] left-[40px] w-[29px] h-[29px] object-cover"
        alt=""
        src="/calendar@2x.png"
      />
      <div className="absolute top-[883px] left-[42px] w-[114px] h-[30px]">
        <div className="absolute h-full w-[64.91%] top-[0%] left-[35.09%] font-semibold inline-block">
          Log out
        </div>
        <img
          className="absolute top-[-1px] left-[-2px] w-[34px] h-[34px] object-cover"
          alt=""
          src="/logout@2x.png"
        />
      </div>
      <div className="absolute top-[611px] left-[28px] w-[170px] h-[228px] text-xs">
        <div className="absolute top-[17.5px] left-[-0.5px] rounded-xl bg-lavenderblush-200 box-border w-[171px] h-[211px] border-[1px] border-solid border-crimson-100" />
        <div className="absolute top-[138px] left-[15px] font-medium">
          <p className="m-0">50k people are playing</p>
          <p className="m-0">now</p>
        </div>
        <div className="absolute top-[60px] left-[16px] text-mini font-semibold text-darkslategray-300">
          <p className="m-0">Play movie quizes</p>
          <p className="m-0">and earn</p>
          <p className="m-0">free tickets</p>
        </div>
        <div className="absolute top-[182px] left-[29px] rounded-11xl bg-crimson-200 w-28 h-[30px]" />
        <div className="absolute top-[188px] left-[46px] font-medium text-rose-700">
          Start playing
        </div>
        <div className="absolute top-[0px] left-[67px] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.25)] w-[35px] h-[35px]" />
      </div>
    </div>
  );
};

export default MovieBoxContainer1;
