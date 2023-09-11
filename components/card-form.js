import { useMemo } from "react";

const CardForm = ({
  imageCaption,
  categoryTitle,
  propTop,
  propWidth,
  propHeight,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const listIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div
      className="absolute top-[1618px] left-[818px] w-[360px] h-[229px] text-left text-sm text-gainsboro-100 font-poppins"
      style={frameDiv1Style}
    >
      <img
        className="absolute top-[0px] left-[0px] rounded-3xs w-[360px] h-[229px] object-cover"
        alt=""
        src={imageCaption}
      />
      <div className="absolute top-[187px] left-[0px] rounded-3xs bg-gray1-600 [backdrop-filter:blur(4px)] w-[360px] h-[42px]" />
      <img
        className="absolute top-[198px] left-[16px] w-[23px] h-[23px] object-cover"
        alt=""
        src="/list1@2x.png"
        style={listIconStyle}
      />
      <div className="absolute top-[199px] left-[51px] font-medium [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.25)]">
        {categoryTitle}
      </div>
    </div>
  );
};

export default CardForm;
