'use client';
import React, {useEffect, useRef} from 'react';
import {LuShapes} from 'react-icons/lu';
import {IoIosTrendingDown,} from 'react-icons/io';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import SwiperCore from 'swiper';
import {Autoplay} from 'swiper/modules';
import Typed from 'typed.js';
import StraightChart from "@/components/core/shared/StraightChart";
import DonutChart from "@/components/core/shared/DonutChart";
import {FiTrendingUp} from "react-icons/fi";

const HeroPulse = () => {
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

  const chart = [
    {name: 'Inflow', value: 200000, fill: '#fff'},
    {name: 'Outflow', value: 98000, fill: '#f4be37'},
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
    <div className='grid md:grid-cols-2  md:place-content-end  mx-0'>
      <div className="space-y-4  flex flex-col   items-center ">
        <div
          className="hidden min-h-[100px] w-[250px] animate-pulse rounded-b-2xl bg-[#131416] duration-1000 ease-in-out md:block"/>

        <div className="space-y-4 ">
          <div className="relative min-h-[60px] w-[250px] space-y-4 rounded-2xl rounded-bl-none bg-[#282A30] p-4">
            <div className="flex items-center gap-2">
              <LuShapes className="text-slate-200" size="20px"/>
              <span className="text-white" ref={el}>
                Elements
              </span>{' '}
            </div>
          </div>
          <div
            className="relative w-[250px] space-y-4 rounded-2xl bg-[#282A30] px-4 py-6">
            <div>
              <div className="px-4 relative ">
                <div className="bg-linear-to-r from-green-600 to-primary rounded-xl pt-[10px] relative">
                  <div className="absolute inset-0 rounded-xl bg-linear-to-r from-green-600 to-primary"/>
                  <div
                    className="bg-white rounded-xl min-h-[60px] group hover:-translate-y-6 ease-in-out duration-500 relative p-4">
                    <div className="space-y-0.5 hidden group-hover:block">
                      <div className="min-h-[15px] w-[87%] bg-[#1C1D22] rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1C1D22] min-h-[100px]  rounded-xl -mt-10 z-10 relative p-4">
                <div className=" mt-8 max-w-xl text-lg tracking-tight text-slate-400 text-right leading-[1.2]">
                  <p>New project</p>
                  <p className="text-[14px]">Select a template</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-[250px] space-y-4 rounded-2xl rounded-tl-none">
          <div className="rounded-lg bg-[#282A30] p-4">
            <p className="text-white">Payments</p>
            <p className="text-slate-400">This month</p>
            <div className="mt-4 space-y-2">
              <p className="text-bold text-small text-white">
                <span className="text-slate-400">₦</span>134,500.00
              </p>
              <p className="flex items-center gap-2 text-sm text-blue-400">
                <FiTrendingUp size="20px" className="text-blue-400"/>
                ₦0.008
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-[#282A30] p-4">
            <p className="text-white">Expenses</p>
            <p className="text-slate-400">This month</p>
            <div className="mt-4 space-y-2">
              <p className="text-bold text-small text-white">
                <span className="text-slate-400">₦</span>71,500.00
              </p>
              <p className="flex items-center gap-2 text-sm text-red-400">
                <IoIosTrendingDown size="20px" className="text-red-400"/>
                0.56%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8 flex flex-col md:items-end items-center">
        <div
          className="space-y-4 rounded-lg bg-[#282A30] p-4 w-[250px]">
          {filteredGraph?.slice(0, 4).map((property) => {
            const values = [+property.sold, +property.units, +property.available];
            return (
              <div key={property.name} className="py-2">
                <StraightChart data={values} title={property?.name}/>
              </div>
            );
          })}
        </div>
        <div
          className="space-y-2 rounded-lg bg-[#282A30] p-4 min-w-[250px]">
          <p className="text-white">Inflow-Outflow</p>
          <DonutChart data={chart} text={text}/>
        </div>
      </div>
    </div>
  );
};

export default HeroPulse;

