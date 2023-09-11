import FeaturedMovieContainer2 from "../components/featured-movie-container2";
import FormFooter1 from "../components/form-footer1";
import MovieBoxContainer from "../components/movie-box-container";
import MovieDescriptionContainer1 from "../components/movie-description-container1";
import ContainerNewArrivalDune from "../components/container-new-arrival-dune";
import ContainerNewArrivalDune1 from "../components/container-new-arrival-dune1";

const HomepageDesktop = () => {
  return (
    <div className="relative bg-white w-full h-[2845px] overflow-hidden text-left text-xs text-gray-400 font-dm-sans">
      <FeaturedMovieContainer2 />
      <div className="absolute top-[2626px] left-[0px] w-[959px] overflow-hidden flex flex-col items-end justify-center">
        <FormFooter1 />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[600px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[600px] object-cover"
          alt=""
          src="/poster@2x.png"
        />
        <MovieBoxContainer />
        <div className="absolute top-[157px] left-[98px] w-[404px] h-[286px] overflow-hidden flex flex-col items-center justify-center">
          <MovieDescriptionContainer1 />
        </div>
        <div className="absolute top-[245px] left-[1380px] w-9 h-[110px] flex flex-row items-center justify-end gap-[6px]">
          <div className="relative rounded-md bg-white w-5 h-[3px]" />
          <div className="flex flex-col items-center justify-start gap-[10px]">
            <b className="relative leading-[14px]">1</b>
            <b className="relative leading-[14px]">2</b>
            <b className="relative text-base leading-[14px] text-white">3</b>
            <b className="relative leading-[14px]">4</b>
            <b className="relative leading-[14px]">5</b>
          </div>
        </div>
      </div>
      <div className="absolute top-[1377px] left-[0px] w-[1402px] overflow-hidden flex flex-col items-end justify-center">
        <div className="w-[1368px] h-[1102px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <ContainerNewArrivalDune />
          <ContainerNewArrivalDune1 />
        </div>
      </div>
    </div>
  );
};

export default HomepageDesktop;
