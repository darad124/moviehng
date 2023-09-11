import Logo from "./logo";

const MovieBoxContainer = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1440px] h-[600px] overflow-hidden flex flex-col items-center justify-start text-left text-base text-white font-dm-sans">
      <div className="relative w-[1440px] h-20">
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-20" />
        <div className="absolute top-[20px] left-[491px] rounded-md box-border w-[529px] flex flex-row py-1.5 px-2.5 items-center justify-between border-[2px] border-solid border-gray-300">
          <div className="relative leading-[24px]">
            What do you want to watch?
          </div>
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src="/search.svg"
          />
        </div>
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
