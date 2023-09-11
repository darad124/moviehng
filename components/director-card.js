const DirectorCard = () => {
  return (
    <div className="absolute top-[650px] left-[12px] w-[785.06px] h-[183px] text-left text-xl text-darkslategray-200 font-poppins">
      <img
        className="absolute top-[-0.5px] left-[-0.5px] w-[786.06px] h-px"
        alt=""
        src="/vector-8.svg"
      />
      <img
        className="absolute top-[60.5px] left-[-0.5px] w-[786.06px] h-px"
        alt=""
        src="/vector-8.svg"
      />
      <img
        className="absolute top-[121.5px] left-[-0.5px] w-[786.06px] h-px"
        alt=""
        src="/vector-8.svg"
      />
      <img
        className="absolute top-[182.5px] left-[-0.5px] w-[786.06px] h-px"
        alt=""
        src="/vector-8.svg"
      />
      <div className="absolute top-[16px] left-[6px]">
        <span>Director :</span>
        <span className="text-white">{` `}</span>
        <span className="text-rose-700">Joseph Kosinski</span>
      </div>
      <div className="absolute top-[77px] left-[6px]">
        <span>{`Writers :  `}</span>
        <span className="text-rose-700">
          Jim Cash, Jack Epps Jr, Peter Craig
        </span>
      </div>
      <div className="absolute top-[138px] left-[6px]">
        <span>{`Stars
: `}</span>
        <span className="text-rose-700">
          Tom Cruise, Jennifer Connelly, Miles Teller
        </span>
      </div>
    </div>
  );
};

export default DirectorCard;
