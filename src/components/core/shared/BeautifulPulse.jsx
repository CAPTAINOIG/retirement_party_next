
import React, { useEffect, useRef } from 'react';
import { LuPresentation, LuServer, LuShapes, LuSquareChartGantt } from 'react-icons/lu';
import {
  IoAnalytics,
  IoBarChartOutline,
  IoFileTray,
  IoLogoGithub,
  IoLogoSlack,
  IoMenu,
  IoShapesOutline,
  IoStatsChart,
} from 'react-icons/io5';
import { BsArrowsMove, BsRobot, BsTools } from 'react-icons/bs';
import { TbChartArrowsVertical, TbChartDots2, TbChartGridDots, TbChartInfographic, TbPlanet } from 'react-icons/tb';
import {
  IoIosSettings,
  IoLogoApple,
  IoLogoChrome,
  IoLogoDribbble,
  IoLogoOctocat,
  IoLogoWindows,
  IoLogoYoutube,
  IoMdAdd,
  IoMdApps,
} from 'react-icons/io';
import { MdAbc, MdOutlineBubbleChart, MdSettingsInputAntenna, MdSettingsVoice } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import SwiperCore from 'swiper';
import { Autoplay, EffectFlip } from 'swiper/modules';
import { CgShapeCircle, CgShapeHexagon, CgShapeRhombus, CgShapeSquare, CgShapeTriangle } from 'react-icons/cg';
import { RiShapeLine } from 'react-icons/ri';
import { BiLogoInstagram, BiLogoLinkedin, BiShapePolygon, BiShapeTriangle } from 'react-icons/bi';
import {
  FaAmbulance,
  FaCameraRetro,
  FaCanadianMapleLeaf,
  FaChartLine,
  FaChartPie,
  FaUser,
  FaUserEdit,
} from 'react-icons/fa';
import {
  PiAmazonLogoBold,
  PiChartBar,
  PiChartLineDownLight,
  PiChartPieSliceDuotone,
  PiPresentationChart,
} from 'react-icons/pi';
import { RxFigmaLogo } from 'react-icons/rx';
import { FaChartSimple } from 'react-icons/fa6';
import { TiChartAreaOutline } from 'react-icons/ti';
import { AiFillGift } from 'react-icons/ai';
import { TfiControlRecord } from 'react-icons/tfi';
import { CiGlobe } from 'react-icons/ci';
import {
  GiAfrica,
  GiAustralia,
  GiMexico,
  GiNigeria,
  GiSouthAmerica,
  GiSouthKorea,
  GiSpain,
  GiSriLanka,
} from 'react-icons/gi';
import Typed from 'typed.js';

const BeautifulPulse = () => {
  SwiperCore.use([Autoplay]);

  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Elements', 'Templates', 'Images', 'Layers', 'Projects'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 3000,
      loop: true,
      smartBackspace: true,
      showCursor: false,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className='grid md:grid-cols-2  md:place-content-end  mx-0'>
      <div className="space-y-4  flex flex-col   items-center ">
        <div className="hidden min-h-[100px] w-[250px] animate-pulse rounded-b-2xl bg-[#131416] duration-1000 ease-in-out md:block" />

        <div className="space-y-4 ">
          <div className="relative min-h-[60px] w-[250px] space-y-4 rounded-2xl rounded-bl-none bg-[#282A30] p-4">
            <div className="flex items-center gap-2">
              <LuShapes className="text-slate-200" size="20px" />
              <span className="text-white" ref={el}>
                Elements
              </span>{' '}
            </div>
          </div>
          <div className="relative min-h-full w-[250px]">
            <Swiper
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
              modules={[EffectFlip]}
              effect="flip"
              slidesPerView={1}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="relative space-y-4 rounded-2xl rounded-tl-none bg-[#282A30] px-4 py-6">
                  <div className="flex items-center gap-2">
                    <MdAbc className="h-[40px] w-[40px] rounded-full bg-slate-100 p-2 text-slate-800" size="20px" />
                    <p className="text-slate-200">Texts</p>
                  </div>
                  <div className="space-y-1">
                    <p className="bg-gradient-to-r from-green-600 to-primary bg-clip-text text-3xl font-semibold text-transparent">
                      Heading
                    </p>
                    <p className="bg-gradient-to-r from-purple-600 to-primary bg-clip-text text-2xl font-bold text-transparent">
                      Subheading
                    </p>
                    <p className="bg-gradient-to-r from-pink-600 to-primary bg-clip-text text-xl font-semibold text-transparent">
                      Paragraph
                    </p>
                    <p className="bg-gradient-to-r from-blue-200 to-primary bg-clip-text text-md text-transparent">
                      Caption
                    </p>
                    <p className="text-sm text-slate-200">List</p>
                    <p className="text-small text-slate-200">100</p>
                    <p className="text-xs text-slate-200">Femi is the G.O.A.T</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative space-y-4 rounded-2xl rounded-tl-none bg-[#282A30] px-4 py-6">
                  <div className="flex items-center gap-2">
                    <TfiControlRecord
                      className="h-[40px] w-[40px] rounded-full bg-slate-100 p-2.5 text-slate-800"
                      size="20px"
                    />
                    <p className="text-slate-200">Icons</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <FaUser className="text-slate-200" size="40px" />
                    <FaUserEdit className="text-slate-200" size="40px" />
                    <LuServer className="text-slate-200" size="40px" />
                    <IoFileTray className="text-slate-200" size="40px" />
                    <FaAmbulance className="text-slate-200" size="40px" />
                    <BsTools className="text-slate-200" size="40px" />
                    <IoIosSettings className="text-slate-200" size="40px" />
                    <MdSettingsInputAntenna className="text-slate-200" size="40px" />
                    <MdSettingsVoice className="text-slate-200" size="40px" />
                    <AiFillGift className="text-slate-200" size="40px" />
                    <BsArrowsMove className="text-slate-200" size="40px" />
                    <TbPlanet className="text-slate-200" size="40px" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative space-y-4 rounded-2xl rounded-tl-none bg-[#282A30] px-4 py-6">
                  <div className="flex items-center gap-2">
                    <MdOutlineBubbleChart
                      className="h-[40px] w-[40px] rounded-full bg-slate-100 p-2.5 text-slate-800"
                      size="20px"
                    />
                    <p className="text-slate-200">Charts</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <FaChartLine className="text-slate-200" size="40px" />
                    <FaChartPie className="text-slate-200" size="40px" />
                    <FaChartSimple className="text-slate-200" size="40px" />
                    <IoBarChartOutline className="text-slate-200" size="40px" />
                    <TiChartAreaOutline className="text-slate-200" size="40px" />
                    <PiPresentationChart className="text-slate-200" size="40px" />
                    <PiChartPieSliceDuotone className="text-slate-200" size="40px" />
                    <PiChartLineDownLight className="text-slate-200" size="40px" />
                    <PiChartBar className="text-slate-200" size="40px" />
                    <TbChartGridDots className="text-slate-200" size="40px" />
                    <TbChartDots2 className="text-slate-200" size="40px" />
                    <TbChartArrowsVertical className="text-slate-200" size="40px" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative space-y-4 rounded-2xl rounded-tl-none bg-[#282A30] px-4 py-6">
                  <div className="flex items-center gap-2">
                    <FaCameraRetro
                      className="h-[40px] w-[40px] rounded-full bg-slate-100 p-2.5 text-slate-800"
                      size="20px"
                    />
                    <p className="text-slate-200">Logos</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <IoLogoDribbble className="text-pink-500" size="40px" />
                    <IoLogoApple className="text-white" size="40px" />
                    <IoLogoYoutube className="text-red-600" size="40px" />
                    <IoLogoOctocat className="text-fuchsia-200" size="40px" />
                    <IoLogoWindows className="text-blue-500" size="40px" />
                    <IoLogoChrome className="text-slate-200" size="40px" />
                    <IoLogoGithub className="text-slate-200" size="40px" />
                    <IoLogoSlack className="text-emerald-200" size="40px" />
                    <BiLogoLinkedin className="text-blue-800" size="40px" />
                    <PiAmazonLogoBold className="text-yellow-600" size="40px" />
                    <RxFigmaLogo className="text-purple-400" size="40px" />
                    <BiLogoInstagram className="text-rose-400" size="40px" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="relative w-[250px] space-y-4 rounded-2xl rounded-tl-none bg-[#282A30] px-4 py-6">
          <div className="flex items-center gap-2">
            <IoMenu className="text-slate-200" size="20px" />
            <p className="text-slate-200">Overview</p>
          </div>
          <div className="grid min-h-[20px] grid-cols-3 gap-2 rounded bg-[#1C1D22] p-4">
            <div className="space-y-1">
              <IoMdAdd className="mx-auto h-[40px] w-[40px] rounded-full bg-pink-100 p-2 text-pink-950" size="30px" />
              <p className="text-center text-small text-slate-200">Design</p>
            </div>
            <div className="space-y-1">
              <IoAnalytics
                className="mx-auto h-[40px] w-[40px] rounded-full bg-teal-100 p-2 text-teal-950"
                size="30px"
              />
              <p className="text-center text-small text-slate-200">Analyse</p>
            </div>
            <div className="space-y-1">
              <IoMdApps
                className="mx-auto h-[40px] w-[40px] rounded-full bg-fuchsia-100 p-2 text-fuchsia-950"
                size="30px"
              />
              <p className="text-center text-small text-slate-200">Apps</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="min-h-[30px] animate-pulse bg-[#1C1D22]"></div>
            <div className="min-h-[30px] animate-pulse bg-[#1C1D22]"></div>
            <div className="min-h-[30px] animate-pulse bg-[#1C1D22]"></div>
            <div className="min-h-[30px] animate-pulse bg-[#1C1D22]"></div>
            <div className="min-h-[30px] animate-pulse bg-[#1C1D22]"></div>
            <div className="min-h-[30px] animate-pulse bg-[#1C1D22]"></div>
          </div>
        </div>

        <div className="hidden min-h-[150px] w-[250px] animate-pulse rounded-t-2xl bg-[#282A30] md:block"></div>
      </div>

      <div className="space-y-8 flex flex-col md:items-end items-center">
        <div className="hidden min-h-[250px] w-[250px] animate-pulse rounded-b-2xl bg-[#282A30] md:block"></div>
        <div className="relative min-h-full w-[250px]">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            modules={[EffectFlip]}
            effect="flip"
            slidesPerView={1}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="space-y-4 rounded-2xl bg-[#282A30] px-4 py-6">
                <div>
                  <p className="font-semibold text-slate-300">Create new design</p>
                  <p className="text-small text-slate-500">What are you designing today</p>
                </div>
                <div className="space-y-1">
                  <div className="min-h-[20px] w-[40%] bg-[#1C1D22]"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1 text-center">
                    <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-200 duration-500 ease-in-out hover:scale-[1.1]">
                      <LuSquareChartGantt className="text-slate-900" size="20px" />
                    </div>
                    <p className="text-sm text-slate-400">Report</p>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-200 duration-500 ease-in-out hover:scale-[1.1]">
                      <IoStatsChart className="text-slate-900" size="20px" />
                    </div>
                    <p className="text-sm text-slate-400">Chart</p>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-200 duration-500 ease-in-out hover:scale-[1.1]">
                      <BsRobot className="text-slate-900" size="20px" />
                    </div>
                    <p className="text-sm text-slate-400">Gen AI</p>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-200 duration-500 ease-in-out hover:scale-[1.1]">
                      <LuPresentation className="text-slate-900" size="20px" />
                    </div>
                    <p className="text-sm text-slate-400">Present</p>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-200 duration-500 ease-in-out hover:scale-[1.1]">
                      <TbChartInfographic className="text-slate-900" size="20px" />
                    </div>
                    <p className="text-sm text-slate-400">Infographics</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="space-y-4 rounded-2xl bg-[#282A30] px-4 py-6">
                <div className="flex items-center gap-2">
                  <CiGlobe className="h-[40px] w-[40px] rounded-full bg-slate-100 p-2.5 text-slate-800" size="20px" />
                  <p className="text-slate-200">Maps</p>
                </div>
                <div className="space-y-1">
                  <div className="min-h-[15px] w-[40%] bg-[#1C1D22]"></div>
                  <div className="min-h-[15px] w-[80%] bg-[#1C1D22]"></div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <GiAfrica className="text-slate-200" size="40px" />
                  <FaCanadianMapleLeaf className="text-slate-200" size="40px" />
                  <GiSouthAmerica className="text-slate-200" size="40px" />
                  <GiMexico className="text-slate-200" size="40px" />
                  <GiSpain className="text-slate-200" size="40px" />
                  <GiSouthKorea className="text-slate-200" size="40px" />
                  <GiNigeria className="text-slate-200" size="40px" />
                  <GiAustralia className="text-slate-200" size="40px" />
                  <GiSriLanka className="text-slate-200" size="40px" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative space-y-4 rounded-2xl rounded-tl-none bg-[#282A30] px-4 py-6">
                <div className="flex items-center gap-2">
                  <LuShapes className="h-[40px] w-[40px] rounded-full bg-slate-100 p-2 text-slate-800" size="20px" />
                  <p className="text-slate-200">Shapes</p>
                </div>
                <div className="space-y-1">
                  <div className="min-h-[15px] w-[40%] bg-[#1C1D22]"></div>
                  <div className="min-h-[15px] w-[80%] bg-[#1C1D22]"></div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <CgShapeSquare className="text-slate-200" size="40px" />
                  <CgShapeCircle className="text-slate-200" size="40px" />
                  <CgShapeTriangle className="text-slate-200" size="40px" />
                  <CgShapeHexagon className="text-slate-200" size="40px" />
                  <RiShapeLine className="text-slate-200" size="40px" />
                  <BiShapeTriangle className="text-slate-200" size="40px" />
                  <CgShapeRhombus className="text-slate-200" size="40px" />
                  <BiShapePolygon className="text-slate-200" size="40px" />
                  <IoShapesOutline className="text-slate-200" size="40px" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BeautifulPulse;

