import { useMemo } from "react";

const UpcomingActionAdventureContain = ({
  sectionTitle,
  sectionSubtitle,
  imageDescription,
  mediaInfo,
  propTop,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[1223px] left-[818px] w-[360px] h-[100px] text-left text-sm text-gainsboro-100 font-poppins"
      style={frameDiv2Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xs shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[360px] h-[100px] border-[1px] border-solid border-gainsboro-500" />
      <div className="absolute top-[14px] left-[15px]">
        <p className="m-0">{sectionTitle}</p>
        <p className="m-0">{sectionSubtitle}</p>
      </div>
      <img
        className="absolute top-[8px] left-[275px] rounded-3xs w-[74px] h-[83px] object-cover"
        alt=""
        src={imageDescription}
      />
      <div className="absolute top-[71px] left-[15px] text-xs text-gainsboro-600">
        {mediaInfo}
      </div>
    </div>
  );
};

export default UpcomingActionAdventureContain;
