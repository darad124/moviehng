import { useMemo } from "react";

const TopCastContainer = ({
  imageAltText,
  actorImageUrl,
  characterImageUrl,
  characterName,
  propLeft,
  propWidth,
  propLeft1,
  propBackgroundColor,
  propLeft2,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
    };
  }, [propLeft, propWidth]);

  const ellipseDivStyle = useMemo(() => {
    return {
      left: propLeft1,
      backgroundColor: propBackgroundColor,
    };
  }, [propLeft1, propBackgroundColor]);

  const ellipseIconStyle = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  return (
    <div
      className="absolute top-[158px] left-[0px] w-[141px] h-56 text-center text-mini text-gainsboro-300 font-poppins"
      style={frameDivStyle}
    >
      <div
        className="absolute top-[0px] left-[0px] rounded-[50%] bg-lightcyan w-[140px] h-[140px]"
        style={ellipseDivStyle}
      />
      <img
        className="absolute top-[0px] left-[0px] rounded-[50%] w-[140px] h-[140px] object-cover"
        alt=""
        src={imageAltText}
        style={ellipseIconStyle}
      />
      <div className="absolute top-[155px] left-[0px] font-medium">
        <p className="m-0 text-gainsboro-100">{actorImageUrl}</p>
        <p className="m-0">{characterImageUrl}</p>
        <p className="m-0">{characterName}</p>
      </div>
    </div>
  );
};

export default TopCastContainer;
