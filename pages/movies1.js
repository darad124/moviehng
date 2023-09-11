import MovieBoxContainer1 from "../components/movie-box-container1";
import ShowtimesContainer from "../components/showtimes-container";
import DirectorCard from "../components/director-card";
import TopCastContainer from "../components/top-cast-container";
import CardForm from "../components/card-form";
import UpcomingActionAdventureContain from "../components/upcoming-action-adventure-contain";
import FavouriteContainer from "../components/favourite-container";

const Movies1 = () => {
  return (
    <div className="relative bg-white w-full h-[982px] overflow-y-auto">
      <MovieBoxContainer1 />
      <main className="absolute top-[0px] left-[263px] w-[1198px] h-[2075px] overflow-hidden text-left text-6xl text-gainsboro-100 font-poppins">
        <div className="absolute top-[38px] left-[0px] w-[1198px] h-[2037px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] w-[1198px] h-[449px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-xl w-[1198px] h-[449px] object-cover"
              alt=""
              src="/rectangle-29@2x.png"
            />
            <div className="absolute top-[132px] left-[521px] w-[168px] h-[157px]">
              <div className="absolute top-[-1px] left-[28px] rounded-[50%] bg-gray1-200 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] box-border w-28 h-28 border-[2px] border-solid border-gainsboro-200" />
              <img
                className="absolute top-[26px] left-[53px] w-[62px] h-[62px] object-cover"
                alt=""
                src="/play1@2x.png"
              />
              <div className="absolute top-[119px] left-[0px] font-medium [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
                Watch Trailer
              </div>
            </div>
          </div>
          <div className="absolute top-[480px] left-[18px] w-[774px] h-[150px] text-mini text-firebrick">
            <div className="absolute top-[0px] left-[0px] text-[23px] text-darkslategray-100">
              <span className="font-medium">Top Gun: Maverick</span>
              <span>•</span>
              <span className="font-medium">2022</span>
              <span>•</span>
              <span className="font-medium">PG-13</span>
              <b>•</b>
              <span className="font-medium">2h 10m</span>
            </div>
            <div className="absolute top-[3px] left-[532px] rounded-mini box-border w-[84px] h-[30px] border-[1px] border-solid border-lavenderblush-100" />
            <div className="absolute top-[3px] left-[627px] rounded-mini box-border w-[84px] h-[30px] border-[1px] border-solid border-lavenderblush-100" />
            <div className="absolute top-[6px] left-[549px] font-medium">
              Action
            </div>
            <div className="absolute top-[6px] left-[642px] font-medium">
              Drama
            </div>
            <div className="absolute top-[60px] left-[0px] text-xl text-darkslategray-200">
              <p className="m-0">
                After thirty years, Maverick is still pushing the envelope as a
                top naval aviator,
              </p>
              <p className="m-0">
                but must confront ghosts of his past when he leads TOP GUN's
                elite graduates
              </p>
              <p className="m-0">
                on a mission that demands the ultimate sacrifice from those
                chosen to fly it.
              </p>
            </div>
          </div>
          <ShowtimesContainer />
          <DirectorCard />
          <div className="absolute top-[848px] left-[12px] w-[785.06px] h-[772px] text-xl">
            <div className="absolute top-[0px] left-[0px] w-[785px] h-[55px] text-white">
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray1-300 box-border w-[785px] h-[55px] border-[1px] border-solid border-silver" />
              <div className="absolute top-[0px] left-[0px] rounded-3xs bg-rose-700 w-[253px] h-[55px]" />
              <div className="absolute top-[13px] left-[20px] font-medium">
                Top rated movie #65
              </div>
              <div className="absolute top-[13px] left-[277px] font-medium text-darkslategray-200">
                Awards 9 nominations
              </div>
              <img
                className="absolute top-[13px] left-[729px] w-[30px] h-[30px] object-cover"
                alt=""
                src="/expand-arrow@2x.png"
              />
            </div>
            <img
              className="absolute top-[432px] left-[729px] w-[30px] h-[30px] object-cover"
              alt=""
              src="/expand-arrow1@2x.png"
            />
            <img
              className="absolute top-[477px] left-[0px] w-[785.06px] h-0"
              alt=""
              src="/vector-8.svg"
            />
            <div className="absolute top-[432px] left-[6px]">{`All cast & crew`}</div>
            <img
              className="absolute top-[91px] left-[118px] w-[38px] h-[5px] object-cover"
              alt=""
              src="/expand-arrow2@2x.png"
            />
            <div className="absolute top-[91px] left-[0px] text-5xl font-medium">
              Top Cast
            </div>
            <TopCastContainer
              imageAltText="/ellipse-9@2x.png"
              actorImageUrl="Tom Cruise"
              characterImageUrl="Capt. Pete Mitchell"
              characterName="(Maverick)"
            />
            <div className="absolute top-[158px] left-[207px] w-[140px] h-[201px] text-center text-mini">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-ghostwhite w-[140px] h-[140px]" />
              <img
                className="absolute top-[0px] left-[0px] rounded-[50%] w-[140px] h-[140px] object-cover"
                alt=""
                src="/ellipse-10@2x.png"
              />
              <div className="absolute top-[155px] left-[2px] font-medium">
                <p className="m-0">Jennifer Connelly</p>
                <p className="m-0 text-gainsboro-300">Penny Benjamin</p>
              </div>
            </div>
            <TopCastContainer
              imageAltText="/ellipse-91@2x.png"
              actorImageUrl="Miles Teller
"
              characterImageUrl="Lt. Bradley Bradshaw"
              characterName="(Rooster)"
              propLeft="406px"
              propWidth="157px"
              propLeft1="8px"
              propBackgroundColor="#d6edf6"
              propLeft2="8px"
            />
            <TopCastContainer
              imageAltText="/ellipse-92@2x.png"
              actorImageUrl="Val Kilmer
"
              characterImageUrl="Adm. Tom Kazansky"
              characterName="(Iceman)"
              propLeft="614px"
              propWidth="153px"
              propLeft1="7px"
              propBackgroundColor="#a9acb2"
              propLeft2="7px"
            />
            <img
              className="absolute top-[416px] left-[0px] w-[785px] h-0"
              alt=""
              src="/vector-10.svg"
            />
            <div className="absolute top-[493px] left-[6px] font-medium">
              <p className="m-0">'Top Gun' Trivia, Facts, and</p>
              <p className="m-0">Figures</p>
            </div>
            <img
              className="absolute top-[493px] left-[333px] rounded-3xs w-[452px] h-[274px] object-cover"
              alt=""
              src="/rectangle-35@2x.png"
            />
            <div className="absolute top-[568px] left-[6px] text-lg">
              <p className="m-0">How expensive was Top Gun to</p>
              <p className="m-0">make? In this episode of "By the</p>
              <p className="m-0">Numbers," we break down all the</p>
              <p className="m-0">statistics you need to know</p>
              <p className="m-0">(and some you don't) of the</p>
              <p className="m-0">original '80s classic 'Top Gun.'</p>
            </div>
            <div className="absolute top-[745px] left-[6px] text-lg text-mediumturquoise">
              Learn more
            </div>
          </div>
          <div className="absolute top-[1658px] left-[18px] w-[779px] h-[379px] text-xs">
            <div className="absolute top-[0px] left-[0px] w-[779.47px] h-[336px]">
              <div className="absolute top-[0px] left-[0px] text-6xl font-semibold">
                Similar Movies
              </div>
              <div className="absolute top-[2px] left-[729px] text-mini font-semibold text-dimgray">
                See all
              </div>
              <img
                className="absolute top-[65px] left-[0px] rounded-xl w-[172px] h-[271px] object-cover"
                alt=""
                src="/rectangle-17@2x.png"
              />
              <img
                className="absolute top-[65px] left-[203px] rounded-xl w-[171px] h-[271px] object-cover"
                alt=""
                src="/rectangle-18@2x.png"
              />
              <img
                className="absolute top-[65px] left-[412px] rounded-xl w-[173px] h-[271px] object-cover"
                alt=""
                src="/rectangle-19@2x.png"
              />
              <img
                className="absolute top-[65px] left-[607px] rounded-xl w-[172px] h-[271px] object-cover"
                alt=""
                src="/rectangle-20@2x.png"
              />
              <div className="absolute top-[65px] left-[114px] w-[58.47px] h-[24.08px]">
                <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl bg-gray1-400 [backdrop-filter:blur(5px)] w-[58.47px] h-[24.08px]" />
                <img
                  className="absolute top-[4px] left-[10px] w-[15px] h-[15px] object-cover"
                  alt=""
                  src="/star1@2x.png"
                />
                <div className="absolute top-[3px] left-[29px] font-medium inline-block w-[19.78px] h-[20.64px]">
                  6.9
                </div>
              </div>
              <div className="absolute top-[65px] left-[316px] w-[58.47px] h-[24.08px]">
                <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl bg-gainsboro-400 [backdrop-filter:blur(5px)] w-[58.47px] h-[24.08px]" />
                <img
                  className="absolute top-[4px] left-[10px] w-[15px] h-[15px] object-cover"
                  alt=""
                  src="/star1@2x.png"
                />
                <div className="absolute top-[3px] left-[29px] font-medium inline-block w-[19.78px] h-[20.64px]">
                  7.9
                </div>
              </div>
              <div className="absolute top-[65px] left-[527px] w-[58.47px] h-[24.08px]">
                <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl bg-gray1-500 [backdrop-filter:blur(5px)] w-[58.47px] h-[24.08px]" />
                <img
                  className="absolute top-[4px] left-[10px] w-[15px] h-[15px] object-cover"
                  alt=""
                  src="/star1@2x.png"
                />
                <div className="absolute top-[3px] left-[29px] font-medium inline-block w-[19.78px] h-[20.64px]">
                  8.3
                </div>
              </div>
              <div className="absolute top-[65px] left-[721px] w-[58.47px] h-[24.08px]">
                <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl bg-gainsboro-400 [backdrop-filter:blur(5px)] w-[58.47px] h-[24.08px]" />
                <img
                  className="absolute top-[4px] left-[10px] w-[15px] h-[15px] object-cover"
                  alt=""
                  src="/star1@2x.png"
                />
                <div className="absolute top-[3px] left-[29px] font-medium inline-block w-[19.78px] h-[20.64px]">
                  7.0
                </div>
              </div>
            </div>
          </div>
          <CardForm
            imageCaption="/rectangle-37@2x.png"
            categoryTitle={`New & Upcoming Sequels, Prequels`}
          />
          <CardForm
            imageCaption="/rectangle-371@2x.png"
            categoryTitle="Top 50 TV Dramas"
            propTop="1356px"
            propWidth="23px"
            propHeight="23px"
          />
          <UpcomingActionAdventureContain
            sectionTitle="Upcoming Action and"
            sectionSubtitle="Adventure Movies and TV"
            imageDescription="/rectangle-40@2x.png"
            mediaInfo="updated 3 months ago
 • 
26 images"
          />
          <FavouriteContainer
            componentTitle="Favourite"
            imageCaptionId="/rectangle-401@2x.png"
            imageCountAndTimestamp="created 2 months ago
 • 
48 images"
          />
          <FavouriteContainer
            componentTitle="2022 Summer Movie Guide"
            imageCaptionId="/rectangle-402@2x.png"
            imageCountAndTimestamp="updated 1 month ago
 • 
52 images"
            propTop="1090px"
          />
          <UpcomingActionAdventureContain
            sectionTitle="The Billion-Dollar Film Club: 50"
            sectionSubtitle="Movies to Reach $1 Billion Worldwide"
            imageDescription="/rectangle-403@2x.png"
            mediaInfo="updated 1 week ago
 • 
50 images"
            propTop="957px"
          />
          <CardForm
            imageCaption="/rectangle-372@2x.png"
            categoryTitle="The Best Movies and Shows in September"
            propTop="695px"
            propWidth="27px"
            propHeight="27px"
          />
        </div>
      </main>
    </div>
  );
};

export default Movies1;
