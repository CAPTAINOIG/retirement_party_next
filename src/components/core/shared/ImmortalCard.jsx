import React from 'react';
import SideNav from "@/components/core/shared/SideNav";
import {FaRegFileExcel, FaRegFilePdf} from "react-icons/fa6";
import {CiCloudOn, CiDatabase, CiGlobe, CiMenuKebab} from "react-icons/ci";
import {FaRegFileWord} from "react-icons/fa";
import {BsFiletypeCsv, BsFiletypeJson} from "react-icons/bs";
import {IoIosLink} from "react-icons/io";
import {MdAddToDrive} from "react-icons/md";
import {GrMysql, GrOracle} from "react-icons/gr";
import {SiAmazondynamodb, SiMariadbfoundation, SiPostgresql} from "react-icons/si";
import {TbBrandMongodb} from "react-icons/tb";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import SwiperCore from "swiper";
import {Autoplay, Pagination} from "swiper/modules";

const ImmortalCard = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <SideNav/>
      <div className="md:grid hidden md:grid-cols-4 grid-cols-2 gap-4 w-full">
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#1C1D22]">
              <FaRegFileExcel className="text-green-500" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#1C1D22]">
              <FaRegFileWord className="text-blue-500" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#1C1D22]">
              <BsFiletypeCsv className="text-emerald-400" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#1C1D22]">
              <BsFiletypeJson className="text-yellow-700" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-purple-100">
              <IoIosLink className="text-purple-950" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-pink-100">
              <FaRegFilePdf className="text-pink-950" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-orange-100">
              <MdAddToDrive className="text-orange-600" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue-100">
              <GrMysql className="text-blue-950" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-teal-100">
              <GrOracle className="text-teal-700" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-200">
              <SiPostgresql className="text-slate-900" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-emerald-100">
              <CiDatabase className="text-emerald-500" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-pink-100">
              <SiMariadbfoundation className="text-pink-900" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-violet-100">
              <CiGlobe className="text-violet-500" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-green-100">
              <SiAmazondynamodb className="text-green-500" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue-100">
              <CiCloudOn className="text-blue-900" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
        <div className="rounded p-4 bg-[#282A30] space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-100">
              <TbBrandMongodb className="text-yellow-900" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px"/>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
            <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <Swiper
          loop={true}
          slidesPerView={2}
          spaceBetween={10}
          className="showcase h-full"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={1000}
          modules={[Pagination]}
        >
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#1C1D22]">
                      <FaRegFileExcel className="text-green-500" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#1C1D22]">
                      <FaRegFileWord className="text-blue-500" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#1C1D22]">
                      <BsFiletypeCsv className="text-emerald-400" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#1C1D22]">
                      <BsFiletypeJson className="text-yellow-700" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-purple-100">
                      <IoIosLink className="text-purple-950" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-pink-100">
                      <FaRegFilePdf className="text-pink-950" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-orange-100">
                      <MdAddToDrive className="text-orange-600" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue-100">
                      <GrMysql className="text-blue-950" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-teal-100">
                      <GrOracle className="text-teal-700" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-200">
                      <SiPostgresql className="text-slate-900" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-emerald-100">
                      <CiDatabase className="text-emerald-500" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-pink-100">
                      <SiMariadbfoundation className="text-pink-900" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-violet-100">
                      <CiGlobe className="text-violet-500" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-green-100">
                      <SiAmazondynamodb className="text-green-500" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue-100">
                      <CiCloudOn className="text-blue-900" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded p-4 bg-[#282A30] space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-100">
                      <TbBrandMongodb className="text-yellow-900" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px"/>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[40%] rounded-full"/>
                    <div className="bg-slate-400 animate-pulse h-[10px] w-[80%] rounded-full"/>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default ImmortalCard;
