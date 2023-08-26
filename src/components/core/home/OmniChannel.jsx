import React from 'react';
import {IconArrowRight} from "@tabler/icons-react";
import Button from "@/components/global/Button";

const OmniChannel = () => {
  return (
    <div className="container">
      <div className="md:grid grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1]">
            The AI <br className="hidden md:block"/>
            Omnichannel
            for Africa's data.
          </h2>
          <p className="mt-6 text-base md:text-lg">
            We use AI models to simplify datasets
            into <br className="hidden md:block"/> conversations, reports and infographics.
          </p>
          <div>
            <Button
              color="black" className="mt-12" rightIcon={<IconArrowRight/>} size="lg"
            >
              Get started
            </Button>
          </div>
        </div>
        <div>
          <img className="block md:hidden pt-10 w-full" src="/images/2.png"/>
          <div className="md:block hidden relative">
            <div className="absolute animate-bounce rounded-[1.2rem] bg-white shadow top-[18rem] left-[-7rem]">
              <div className="px-8 py-6">
                <div className="flex items-center mb-8"><h3 className="font-semibold text-base mr-4">Recent
                  analysis</h3>
                </div>
                <div className="space-y-6 text-md w-full">
                  <div className="flex items-center">
                    <div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-50 text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="tabler-icon tabler-icon-file-text">
                          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                          <path d="M9 9l1 0"></path>
                          <path d="M9 13l6 0"></path>
                          <path d="M9 17l6 0"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="px-4 overflow-hidden"><p className="font-medium">John Doe</p><p
                      className="text-[.92rem] overflow-hidden text-ellipsis whitespace-nowrap opacity-80">Opay</p>
                    </div>
                    <a className="ml-auto" href="#">
                      <button type="button"
                              className="px-4 py-1 text-[.94rem] border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full transition duration-100 inline-flex items-center whitespace-nowrap">
                        <span className="flex-1">View</span></button>
                    </a></div>
                  <div className="flex items-center">
                    <div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-50 text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="tabler-icon tabler-icon-file-text">
                          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                          <path d="M9 9l1 0"></path>
                          <path d="M9 13l6 0"></path>
                          <path d="M9 17l6 0"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="px-4 overflow-hidden"><p className="font-medium">Jane Doe</p><p
                      className="text-[.92rem] overflow-hidden text-ellipsis whitespace-nowrap opacity-80">Kuda
                      Bank </p></div>
                    <a className="ml-auto" href="#">
                      <button type="button"
                              className="px-4 py-1 text-[.94rem] border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full transition duration-100 inline-flex items-center whitespace-nowrap">
                        <span className="flex-1">View</span></button>
                    </a></div>
                  <hr/>
                  <a className="w-full hover:bg-gray-50 flex items-center justify-center px-8 font-medium text-md"
                     href="#">View all <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" className="ml-4">
                    <path d="M5 12l14 0"></path>
                    <path d="M13 18l6 -6"></path>
                    <path d="M13 6l6 6"></path>
                  </svg></a>
                </div>
              </div>
            </div>
            <div
              className="bg-white animate-bounce delay-four absolute left-[-3rem] top-[-3rem] bg-white shadow border rounded-[1.2rem] transition-all duration-300 flex items-start px-8 py-6 hover:scale-[1.01] hover:-translate-y-1 cursor-pointer custom-cursor-on-hover">
              <div className="mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="text-blue-700">
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path>
                  <path d="M5 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"></path>
                  <path d="M20 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
                  <path d="M12.5 15a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1 -3 0v-3a1.5 1.5 0 0 1 1.5 -1.5z"></path>
                </svg>
              </div>
              <div className="ml-3"><p>Q1 2023 progress report for our company</p><p
                className="opacity-80 text-sm mt-1">1st
                Jan, 2023</p></div>
            </div>
            <div
              className="absolute animate-bounce delay-six bg-white rounded-[1.2rem] shadow bottom-[7rem] right-[-5rem] grid gap-2 px-4 py-4 grid-cols-2">
              <a
                className="flex flex-col items-center rounded-2xl text-center px-2 py-4 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                href="#">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white !bg-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       className="tabler-icon tabler-icon-edit-circle">
                    <path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z"></path>
                    <path d="M16 5l3 3"></path>
                    <path d="M9 7.07a7 7 0 0 0 1 13.93a7 7 0 0 0 6.929 -6"></path>
                  </svg>
                </div>
                <div className="mt-2"><p className="text-sm text-gray-900">Analyze docs</p></div>
              </a><a
              className="flex flex-col items-center rounded-2xl text-center px-2 py-4 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              href="#">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white !bg-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="tabler-icon tabler-icon-books">
                  <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                  <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                  <path d="M5 8h4"></path>
                  <path d="M9 16h4"></path>
                  <path
                    d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"></path>
                  <path d="M14 9l4 -1"></path>
                  <path d="M16 16l3.923 -.98"></path>
                </svg>
              </div>
              <div className="mt-2"><p className="text-sm text-gray-900">Financial report</p></div>
            </a><a
              className="flex flex-col items-center rounded-2xl text-center px-2 py-4 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              href="#">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white !bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#fff"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path
                    d="M120-120v-76l60-60v136h-60Zm165 0v-236l60-60v296h-60Zm165 0v-296l60 61v235h-60Zm165 0v-235l60-60v295h-60Zm165 0v-396l60-60v456h-60ZM120-356v-85l280-278 160 160 280-281v85L560-474 400-634 120-356Z"/>
                </svg>
              </div>
              <div className="mt-2"><p className="text-sm text-gray-900">Market data</p></div>
            </a><a
              className="flex flex-col items-center rounded-2xl text-center px-2 py-4 transition duration-150 ease-in-out hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              href="#">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white !bg-teal-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="tabler-icon tabler-icon-file-text">
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                  <path d="M9 9l1 0"></path>
                  <path d="M9 13l6 0"></path>
                  <path d="M9 17l6 0"></path>
                </svg>
              </div>
              <div className="mt-2"><p className="text-sm text-gray-900">Account insight</p></div>
            </a>
            </div>
            <img className="w-full" src="/images/4.png"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmniChannel;