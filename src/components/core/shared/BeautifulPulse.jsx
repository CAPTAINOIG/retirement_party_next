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

const BeautifulPulse = () => {
  SwiperCore.use([Autoplay]);

  const chart = [
    { name: 'Inflow', value: 200000, fill: '#fff' },
    { name: 'Outflow', value: 98000, fill: '#f4be37' },
  ];
  const text = ['Inflow', 'Outflow'];
  const filteredGraph = [
    {
      name: 'Rent',
      sold: 85,
      units: 200,
      available: 150,
    },
    {
      name: 'Marketing',
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
      <div className="flex flex-col items-center space-y-8">
        <div className="relative w-full space-y-4 rounded-3xl bg-[#282A30] px-8 py-5 text-white">
          <div className="flex items-center gap-2">
            <LuShapes className="text-slate-200" size="20px" />
            <TextLoop interval={5}>
              <span>Elements</span>
              <span>Templates</span>
              <span>Images</span>
              <span>Layers</span>
              <span>Projects</span>
            </TextLoop>
          </div>
        </div>
        <div className="relative h-max w-full">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            speed={1000}
            modules={[EffectFlip]}
            effect="flip"
            slidesPerView={1}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="relative space-y-6 rounded-3xl bg-[#282A30] px-8 py-6">
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
            <SwiperSlide>
              <div className="space-y-4 rounded-3xl bg-[#282A30] px-8 py-6">
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
            <SwiperSlide>
              <div className="relative space-y-4 rounded-3xl bg-[#282A30] px-8 py-6">
                <div className="flex items-center gap-2">
                  <CiCoins1 className="h-[40px] w-[40px] rounded-full bg-slate-100 p-2.5 text-slate-800" size="20px" />
                  <p className="text-slate-200">Coins</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <img src="/images/bitcoin.png" />
                    <p className="text-slate-200">Bitcoin</p>
                  </div>
                  <div className="space-y-1">
                    <img src="/images/ethereum.png" />
                    <p className="text-slate-200">Ethereum</p>
                  </div>
                  <div className="space-y-1">
                    <img src="/images/tether.png" />
                    <p className="text-slate-200">USDt</p>
                  </div>
                  <div className="space-y-1">
                    <img src="/images/solana.png" />
                    <p className="text-slate-200">Solana</p>
                  </div>
                  <div className="space-y-1">
                    <img src="/images/tron.png" />
                    <p className="text-slate-200">Tron</p>
                  </div>
                  <div className="space-y-1">
                    <img src="/images/xrp.png" />
                    <p className="text-slate-200">Xrp</p>
                  </div>
                  <div className="space-y-1">
                    <img src="/images/usdc.png" />
                    <p className="text-slate-200">USDC</p>
                  </div>
                  <div className="space-y-1">
                    <img src="/images/bnb.png" />
                    <p className="text-slate-200">BNB</p>
                  </div>
                  <div className="space-y-1">
                    <img src="/images/dogecoin.png" />
                    <p className="text-slate-200">Dogecoin</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative space-y-4 rounded-3xl bg-[#282A30] px-8 py-6">
                <div className="flex items-center gap-2">
                  <AiOutlineStock
                    className="h-[40px] w-[40px] rounded-full bg-slate-100 p-2.5 text-slate-800"
                    size="20px"
                  />
                  <p className="text-slate-200">Stocks</p>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    <p className="text-slate-200">Index</p>
                    <p className="text-slate-200">Last</p>
                    <p className="text-slate-200">Change</p>
                  </div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                      <p className="text-slate-200">Nasdaq</p>
                      <p className="text-slate-200">16,098.19</p>
                      <p className="text-green-300">+494.93</p>
                    </div>
                    <hr className="border border-slate-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="grid grid-cols-3 gap-2">
                      <p className="text-slate-200">NYSE</p>
                      <p className="text-slate-200">17,797.27</p>
                      <p className="text-green-300">+358.63</p>
                    </div>
                    <hr className="border border-slate-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="grid grid-cols-3 gap-2">
                      <p className="text-slate-200">S&P 500</p>
                      <p className="text-slate-200">5,197.83</p>
                      <p className="text-green-300">+135.58</p>
                    </div>
                    <hr className="border border-slate-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="grid grid-cols-3 gap-2">
                      <p className="text-slate-200">FTSE 100</p>
                      <p className="text-slate-200">7,910.53</p>
                      <p className="text-green-300">+208.45</p>
                    </div>
                    <hr className="border border-slate-500" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="relative w-full space-y-4 rounded-3xl bg-[#282A30] px-8 py-6">
          <div className="flex items-center gap-2">
            <IoMenu className="text-slate-200" size="20px" />
            <p className="text-slate-200">Overview</p>
          </div>
          <div className="grid min-h-[20px] grid-cols-3 gap-2 rounded bg-[#1C1D22] px-8 py-6">
            <div className="space-y-1">
              <IoMdAdd className="mx-auto h-[40px] w-[40px] rounded-full bg-pink-100 p-2 text-pink-950" size="30px" />
              <p className="text-small text-center text-slate-200">Design</p>
            </div>
            <div className="space-y-1">
              <IoAnalytics
                className="mx-auto h-[40px] w-[40px] rounded-full bg-teal-100 p-2 text-teal-950"
                size="30px"
              />
              <p className="text-small text-center text-slate-200">Analyse</p>
            </div>
            <div className="space-y-1">
              <IoMdApps
                className="mx-auto h-[40px] w-[40px] rounded-full bg-fuchsia-100 p-2 text-fuchsia-950"
                size="30px"
              />
              <p className="text-small text-center text-slate-200">Apps</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="min-h-[20px] animate-pulse rounded bg-[#1C1D22]"></div>
            <div className="min-h-[20px] animate-pulse rounded bg-[#1C1D22]"></div>
            <div className="min-h-[20px] animate-pulse rounded bg-[#1C1D22]"></div>
            <div className="min-h-[20px] animate-pulse rounded bg-[#1C1D22]"></div>
            <div className="min-h-[20px] animate-pulse rounded bg-[#1C1D22]"></div>
            <div className="min-h-[20px] animate-pulse rounded bg-[#1C1D22]"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-8 md:items-end">
        <div className="w-full space-y-4 rounded-3xl bg-[#282A30] px-8 py-6 text-white">
          {filteredGraph?.slice(0, 4).map((property) => {
            const values = [+property.sold, +property.units, +property.available];
            return (
              <div key={property.name} className="py-2">
                <StraightChart data={values} title={property?.name} />
              </div>
            );
          })}
        </div>
        <div className="relative h-max w-full">
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
                <div className="flex items-center gap-2 rounded bg-yellow-300 p-2">
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
