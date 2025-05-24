// 'use client'
import React, { useEffect, useRef } from 'react';
import { LuPresentation, LuShapes, LuSquareChartGantt } from 'react-icons/lu';
import { IoAnalytics, IoMenu, IoSparkles, IoStatsChart } from 'react-icons/io5';
import { BsRobot } from 'react-icons/bs';
import { TbChartInfographic } from 'react-icons/tb';
import { IoIosTrendingDown, IoMdAdd, IoMdApps } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import SwiperCore from 'swiper';
import { Autoplay, EffectFlip } from 'swiper/modules';
import { AiOutlineStock } from 'react-icons/ai';
import { CiCircleList, CiCoins1 } from 'react-icons/ci';
import StraightChart from '@/components/core/shared/StraightChart';
import DonutChart from '@/components/core/shared/DonutChart';
import { FiTrendingUp } from 'react-icons/fi';
import ClientOnly from '@/components/global/ClientOnly';
import TextLoop from '@/components/global/TextLoop';
import {
  FaCode,
  FaHeadset,
  FaMegaport,
  FaMoneyBillWave,
  FaPaintbrush,
  FaUsers,
  FaUserTie,
  FaVideo,
} from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import { RiStockLine } from 'react-icons/ri';

const BeautifulPulse = () => {
  SwiperCore.use([Autoplay]);

  const chart = [
    { name: 'Inflow', value: 200000, fill: '#fff' },
    { name: 'Outflow', value: 98000, fill: '#f4be37' },
  ];
  const text = ['Inflow', 'Outflow'];
  const filteredGraph = [
    {
      name: 'Legal',
      sold: 85,
      units: 200,
      available: 150,
    },
    {
      name: 'Banking',
      sold: 200,
      units: 180,
      available: 50,
    },
    {
      name: 'Tax',
      sold: 100,
      units: 1000,
      available: 100,
    },
  ];

  return (
    <div className="mx-0 grid items-center gap-6 md:grid-cols-2 md:pb-0">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative h-max w-full">
          <Swiper
            loop={true}
            autoplay={{ delay: 2000 }}
            speed={1000}
            modules={[EffectFlip]}
            effect="flip"
            slidesPerView={1}
            className="mySwiper"
          >
            <SwiperSlide className="h-auto">
              <div className="relative h-full rounded-3xl bg-[#282A30] px-8 py-6">
                <div className="mb-6 flex items-center gap-4 text-white">
                  <IoSparkles size="20" />
                  <p>Ecosystems</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col space-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
                      <FaUserTie className="text-white" size={24} />
                    </div>
                    <p className="text-md text-slate-200">HR</p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                      <FaMoneyBillWave className="text-white" size={24} />
                    </div>
                    <p className="text-sm text-slate-200">Finance</p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500">
                      <FaUsers className="text-white" size={24} />
                    </div>
                    <p className="text-sm text-slate-200">CRM</p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500">
                      <FaMegaport className="text-white" size={24} />
                    </div>
                    <p className="text-sm text-slate-200">Markets</p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500">
                      <FaPaintbrush className="text-white" size={24} />
                    </div>
                    <p className="text-sm text-slate-200">Design</p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500">
                      <FaCode className="text-white" size={24} />
                    </div>
                    <p className="text-sm text-slate-200">Devs</p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
                      <FaShoppingCart className="text-white" size={24} />
                    </div>
                    <p className="text-sm text-slate-200">E-comms</p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500">
                      <FaHeadset className="text-white" size={24} />
                    </div>
                    <p className="text-sm text-slate-200">Support</p>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500">
                      <FaVideo className="text-white" size={24} />
                    </div>
                    <p className="text-sm text-slate-200">Meetings</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-auto">
              <div className="relative h-full space-y-6 rounded-3xl bg-[#282A30] px-8 py-6">
                <div className="flex items-center gap-2">
                  <CiCircleList
                    className="h-[40px] w-[40px] rounded-full bg-slate-100 p-2 text-slate-800"
                    size="20px"
                  />
                  <p className="text-slate-200">List</p>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="mt-1 h-[15px] w-[15px] rounded-full border border-pink-300" />
                    <div className="space-y-2">
                      <p className="text-slate-200">Dashboard</p>
                      <div className="flex items-center gap-2">
                        <div className="h-[10px] w-[10px] rounded-full border bg-pink-300" />
                        <p className="text-slate-200">Everything in one place</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <div className="mt-1 h-[15px] w-[15px] rounded-full border border-yellow-300" />
                    </div>
                    <div className="w-full space-y-2">
                      <p className="text-slate-200">Project</p>
                      <div className="flex gap-2">
                        <div>
                          <div className="mt-1.5 h-[10px] w-[10px] rounded-full border bg-yellow-300" />
                        </div>
                        <p className="text-slate-200">Clear overview, full efficiency</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="mt-1 h-[15px] w-[15px] rounded-full border border-green-300" />
                    <div className="space-y-2">
                      <p className="text-slate-200">Task</p>
                      <div className="flex items-center gap-2">
                        <div>
                          <div className="h-[10px] w-[10px] rounded-full border bg-green-300" />
                        </div>
                        <p className="text-slate-200">Where work gets done</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-auto">
              <div className="h-full space-y-4 rounded-3xl bg-[#282A30] px-8 py-6">
                <div>
                  <div className="grid grid-cols-2 items-center gap-4">
                    <div className="flex w-full items-center gap-2">
                      <p className="text-md text-white">Balance</p>
                      <IoSparkles size="20px" className="text-white" />
                    </div>
                    <select
                      disabled
                      className="block rounded-3xl border border-gray-900 bg-[#1C1D22] p-2.5 text-sm text-gray-200 outline-none focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option disabled>Select an option</option>
                      <option value="Merchant Finance">Day</option>
                      <option value="Merchant to Merchant BNPL">Month</option>
                      <option value="SME Microcredits">Year</option>
                    </select>
                  </div>
                  <p className="mt-4 text-slate-400">Total revenue</p>
                  <div className="flex gap-2">
                    <p className="text-bold text-xl text-white">
                      <span className="text-slate-400">₦</span>756,000.00
                    </p>
                    <p className="flex items-center gap-2 text-sm text-blue-400">
                      <FiTrendingUp size="20px" className="text-blue-400" />
                      ₦0.008
                    </p>
                  </div>
                  <div className="space-y-1 pt-4">
                    <div className="h-[15px] w-full rounded bg-[#1c1d22]"></div>
                    <div className="h-[15px] w-[60%] rounded bg-[#1c1d22]"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white">Payments</p>
                    <p className="text-slate-400">This month</p>
                    <div className="mt-4 space-y-2">
                      <p className="text-bold text-small text-white">
                        <span className="text-slate-400">₦</span>134,500.00
                      </p>
                      <p className="flex items-center gap-2 text-sm text-blue-400">
                        <FiTrendingUp size="20px" className="text-blue-400" />
                        ₦0.008
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white">Expenses</p>
                    <p className="text-slate-400">This month</p>
                    <div className="mt-4 space-y-2">
                      <p className="text-bold text-small text-white">
                        <span className="text-slate-400">₦</span>71,500.00
                      </p>
                      <p className="flex items-center gap-2 text-sm text-red-400">
                        <IoIosTrendingDown size="20px" className="text-red-400" />
                        0.56%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="h-auto">
              <div className="relative h-full rounded-3xl bg-[#282A30] px-8 py-6">
                <div className="mb-6 flex items-center gap-4 text-white">
                  <RiStockLine size="20" />
                  <p>Markets</p>
                </div>
                <div className="space-y-2.5">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2 rounded-2xl bg-white/10 px-6 py-2.5">
                      <p className="whitespace-nowrap text-white">NGX</p>
                      <p className="text-green-500">+494.93</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2 rounded-2xl bg-white/10 px-6 py-2.5">
                      <p className="whitespace-nowrap text-white">Nasdaq</p>
                      <p className="text-red-500">-494.93</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2 rounded-2xl bg-white/10 px-6 py-2.5">
                      <p className="whitespace-nowrap text-white">NYSE</p>
                      <p className="text-green-500">+358.63</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2 rounded-2xl bg-white/10 px-6 py-2.5">
                      <p className="whitespace-nowrap text-white">S&P 500</p>
                      <p className="text-red-500">-135.58</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2 rounded-2xl bg-white/10 px-6 py-2.5">
                      <p className="whitespace-nowrap text-white">FTSE 100</p>
                      <p className="text-green-500">+208.45</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="relative w-full rounded-3xl bg-green-800 px-8 py-6">
          <div className="mb-6 flex items-center gap-2 text-white">
            <IoMenu size="20px" />
            <p>Overview</p>
          </div>
          <img
            src="https://thumbs.dreamstime.com/b/bull-stock-market-chart-background-bull-stock-market-chart-background-closeup-selective-focus-neural-307859814.jpg"
            alt="random image"
            className="h-[200px] w-full rounded-3xl object-cover"
          />
          <div className="mt-4 grid grid-cols-3 gap-2 rounded">
            <div className="space-y-1">
              <IoMdAdd className="h-[40px] w-[40px] rounded-full bg-pink-100 p-2 text-pink-950" size="30px" />
              <p className="text-md text-slate-200">Design</p>
            </div>
            <div className="space-y-1">
              <IoAnalytics className="h-[40px] w-[40px] rounded-full bg-teal-100 p-2 text-teal-950" size="30px" />
              <p className="text-md text-slate-200">Analyse</p>
            </div>
            <div className="space-y-1">
              <IoMdApps className="h-[40px] w-[40px] rounded-full bg-fuchsia-100 p-2 text-fuchsia-950" size="30px" />
              <p className="text-md text-slate-200">Apps</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-6 md:items-end">
        <div className="w-full space-y-4 rounded-3xl bg-sky-800 px-8 py-6 text-white">
          <img
            src="https://images.pexels.com/photos/3206114/pexels-photo-3206114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="random image"
            className="h-[160px] w-full rounded-3xl"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 30%',
            }}
          />
          <div className="mt-4">
            {filteredGraph?.slice(0, 4).map((property) => {
              const values = [+property.sold, +property.units, +property.available];
              return (
                <div key={property.name} className="py-1">
                  <StraightChart data={values} title={property?.name} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative h-max w-full">
          <Swiper
            loop={true}
            autoplay={{ delay: 5000 }}
            speed={1000}
            modules={[EffectFlip]}
            effect="flip"
            slidesPerView={1}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="space-y-4 rounded-3xl bg-[#282A30] px-8 py-6">
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
              <div className="space-y-4 rounded-3xl bg-[#282A30] px-8 py-6">
                <div className="flex items-center gap-2">
                  <img
                    className="h-[40px] w-[40px] rounded-full bg-slate-100 p-2.5 text-slate-800"
                    src="/images/logo-icon.png"
                  />
                  <p className="text-slate-200">Parrots</p>
                </div>
                <div className="grid grid-cols-5 items-center gap-2">
                  <div className="col-span-3 flex gap-2">
                    <div className="h-[10px] w-full rounded-3xl bg-slate-200" />
                    <div className="h-[10px] w-full rounded-3xl bg-slate-200" />
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <img
                      className="h-[30px] w-[30px] rounded-full border border-yellow-400 transition-transform duration-300 ease-in-out hover:scale-110"
                      src="/images/face-seven.png"
                    />
                    <img
                      className="-ml-3 h-[30px] w-[30px] rounded-full border border-yellow-400 transition-transform duration-300 ease-in-out hover:scale-110"
                      src="/images/face-two.png"
                    />
                    <img
                      className="-ml-3 h-[30px] w-[30px] rounded-full border border-yellow-400 transition-transform duration-300 ease-in-out hover:scale-110"
                      src="/images/face-three.png"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 px-2">
                  <div className="h-[20px] w-[20px] rounded bg-white"></div>
                  <div className="flex w-[80%] items-center gap-2">
                    <div className="h-[10px] w-[70%] rounded-3xl bg-slate-200" />
                    <div className="h-[10px] w-[40%] rounded-3xl bg-slate-200" />
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded bg-green-700 p-2">
                  <div className="h-[20px] w-[20px] rounded bg-white"></div>
                  <div className="flex w-[80%] items-center gap-2">
                    <div className="h-[10px] w-[70%] rounded-3xl bg-white" />
                    <div className="h-[10px] w-[40%] rounded-3xl bg-white" />
                  </div>
                </div>
                <div className="flex items-center gap-2 px-2">
                  <div className="h-[20px] w-[20px] rounded bg-white"></div>
                  <div className="flex w-[80%] items-center gap-2">
                    <div className="h-[10px] w-[70%] rounded-3xl bg-slate-200" />
                    <div className="h-[10px] w-[40%] rounded-3xl bg-slate-200" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative space-y-2 rounded-3xl bg-[#282A30] px-8 py-6">
                <p className="text-white">Inflow-Outflow</p>
                <ClientOnly>
                  <DonutChart data={chart} text={text} />
                </ClientOnly>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BeautifulPulse;
