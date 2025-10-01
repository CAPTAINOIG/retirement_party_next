import React from 'react';
import SideNav from '@/components/core/shared/SideNav';
import { FaRegFileExcel, FaRegFilePdf } from 'react-icons/fa6';
import { CiCloudOn, CiDatabase, CiGlobe, CiMenuKebab } from 'react-icons/ci';
import { FaRegFileWord } from 'react-icons/fa';
import { BsFiletypeCsv, BsFiletypeJson } from 'react-icons/bs';
import { IoIosLink } from 'react-icons/io';
import { MdAddToDrive } from 'react-icons/md';
import { GrMysql, GrOracle } from 'react-icons/gr';
import { SiAmazondynamodb, SiMariadbfoundation, SiPostgresql } from 'react-icons/si';
import { TbBrandMongodb } from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

const ImmortalCard = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="items-center gap-4 space-y-4 px-0 md:flex md:space-y-0 md:px-4">
      <SideNav />
      <div className="hidden w-full grid-cols-2 gap-4 md:grid md:grid-cols-3">
        <div className="space-y-6 rounded p-4">
          <div className="flex items-center justify-between">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-purple-600 text-white">
              <IoIosLink size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px" />
          </div>
          <div className="space-y-2">
            <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
            <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
          </div>
        </div>
        <div className="space-y-6 rounded p-4">
          <div className="flex items-center justify-between">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-pink-600 text-white">
              <FaRegFilePdf size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px" />
          </div>
          <div className="space-y-2">
            <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
            <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
          </div>
        </div>
        <div className="space-y-6 rounded p-4">
          <div className="flex items-center justify-between">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-orange-600 text-white">
              <MdAddToDrive size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px" />
          </div>
          <div className="space-y-2">
            <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
            <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
          </div>
        </div>
        <div className="space-y-6 rounded p-4">
          <div className="flex items-center justify-between">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue-600 text-white">
              <GrMysql size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px" />
          </div>
          <div className="space-y-2">
            <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
            <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
          </div>
        </div>
        <div className="space-y-6 rounded p-4">
          <div className="flex items-center justify-between">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-teal-600 text-white">
              <GrOracle size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px" />
          </div>
          <div className="space-y-2">
            <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
            <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
          </div>
        </div>
        <div className="space-y-6 rounded p-4">
          <div className="flex items-center justify-between">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-200">
              <SiPostgresql className="text-slate-900" size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px" />
          </div>
          <div className="space-y-2">
            <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
            <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
          </div>
        </div>
        <div className="space-y-6 rounded p-4">
          <div className="flex items-center justify-between">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-emerald-600 text-white">
              <CiDatabase size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px" />
          </div>
          <div className="space-y-2">
            <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
            <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
          </div>
        </div>
        <div className="space-y-6 rounded p-4">
          <div className="flex items-center justify-between">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-pink-600 text-white">
              <SiMariadbfoundation size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px" />
          </div>
          <div className="space-y-2">
            <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
            <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
          </div>
        </div>
        <div className="space-y-6 rounded p-4">
          <div className="flex items-center justify-between">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-violet-600 text-white">
              <CiGlobe size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px" />
          </div>
          <div className="space-y-2">
            <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
            <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
          </div>
        </div>
        <div className="space-y-6 rounded p-4">
          <div className="flex items-center justify-between">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-green-600 text-white">
              <SiAmazondynamodb size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px" />
          </div>
          <div className="space-y-2">
            <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
            <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
          </div>
        </div>
        <div className="space-y-6 rounded p-4">
          <div className="flex items-center justify-between">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue-600 text-white">
              <CiCloudOn size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px" />
          </div>
          <div className="space-y-2">
            <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
            <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
          </div>
        </div>
        <div className="space-y-6 rounded p-4">
          <div className="flex items-center justify-between">
            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-600 text-white">
              <TbBrandMongodb size="20px" />
            </div>
            <CiMenuKebab className="text-slate-200" size="20px" />
          </div>
          <div className="space-y-2">
            <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
            <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
          </div>
        </div>
      </div>
      <div className="block md:hidden">
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
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#1C1D22]">
                      <FaRegFileExcel className="text-green-500" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#1C1D22]">
                      <FaRegFileWord className="text-blue-500" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#1C1D22]">
                      <BsFiletypeCsv className="text-emerald-400" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#1C1D22]">
                      <BsFiletypeJson className="text-yellow-700" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-purple-600 text-white">
                      <IoIosLink size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-pink-600 text-white">
                      <FaRegFilePdf size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-orange-600 text-white">
                      <MdAddToDrive size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue-600 text-white">
                      <GrMysql size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-teal-600 text-white">
                      <GrOracle size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-200">
                      <SiPostgresql className="text-slate-900" size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-emerald-600 text-white">
                      <CiDatabase size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-pink-600 text-white">
                      <SiMariadbfoundation size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-violet-600 text-white">
                      <CiGlobe size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-green-600 text-white">
                      <SiAmazondynamodb size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue-600 text-white">
                      <CiCloudOn size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="space-y-6 rounded bg-[#282A30] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-600 text-white">
                      <TbBrandMongodb size="20px" />
                    </div>
                    <CiMenuKebab className="text-slate-200" size="20px" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-[10px] w-[40%] animate-pulse rounded-full bg-slate-400" />
                    <div className="h-[10px] w-[80%] animate-pulse rounded-full bg-slate-400" />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ImmortalCard;
