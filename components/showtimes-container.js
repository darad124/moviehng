const ShowtimesContainer = () => {
  return (
    <div className="absolute top-[478px] left-[818px] w-[360px] h-[184px] text-left text-xl text-gainsboro-100 font-poppins">
      <div className="absolute top-[0px] left-[216px] w-36 h-[38px] text-6xl">
        <img
          className="absolute top-[3px] left-[0px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/star@2x.png"
        />
        <div className="absolute top-[0px] left-[39px] font-medium">
          <span>{`8.5 `}</span>
          <span className="text-xl text-dimgray">| 350k</span>
        </div>
      </div>
      <img
        className="absolute top-[2px] left-[51px] w-[35px] h-[35px] object-cover opacity-[0.5]"
        alt=""
        src="/heart@2x.png"
      />
      <img
        className="absolute top-[2px] left-[106px] w-[35px] h-[35px] object-cover opacity-[0.5]"
        alt=""
        src="/share@2x.png"
      />
      <img
        className="absolute top-[2px] left-[161px] w-[35px] h-[35px] object-cover opacity-[0.5]"
        alt=""
        src="/bookmark@2x.png"
      />
      <div className="absolute top-[62px] left-[0px] w-[360px] h-[55px] text-white">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-rose-700 w-[360px] h-[55px] sm:hover:bg-indianred" />
        <div className="absolute top-[13px] left-[121px] font-medium [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.2)]">
          See Showtimes
        </div>
        <img
          className="absolute top-[14px] left-[84px] w-[29px] h-[29px] object-cover"
          alt=""
          src="/two-tickets@2x.png"
        />
      </div>
      <div className="absolute top-[129px] left-[0px] w-[360px] h-[55px] text-darkslategray-200">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-crimson-300 box-border w-[360px] h-[55px] border-[1px] border-solid border-rose-700 sm:hover:[background:linear-gradient(#fff,_#fff),_rgba(190,_18,_60,_0.1)]" />
        <img
          className="absolute top-[17px] left-[63px] w-[23px] h-[23px] object-cover"
          alt=""
          src="/list@2x.png"
        />
        <div className="absolute top-[13px] left-[98px] font-medium">
          More watch options
        </div>
      </div>
    </div>
  );
};

export default ShowtimesContainer;
