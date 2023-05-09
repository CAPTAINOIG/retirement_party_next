import React from "react";
import { IconArrowRight, IconHeart } from "@tabler/icons-react";
import Button from "@/components/global/Button.jsx";

const InfographicsSection = () => {
  return (
    <>
      <div className="relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1]">
                Lorem ipsum dolor sit <span className="blocked-text text-4xl md:text-6xl">infographics</span>
              </h2>
              <p className="mt-6 text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti eveniet harum omnis possimus sit tempora unde!
              </p>
              <Button color="black" className="mt-12" size="lg" rightIcon={ <IconArrowRight/> }>
                Get started
              </Button>
            </div>
            <div className="relative -order-1 md:-order-1">
              <div className="md:rotate-[-1deg]">
                <div
                  className="relative grid grid-cols-5 gap-4 border border-gray-100 shadow-md p-4 bg-transparent rounded-2xl animate-[bounce_2s_ease-in-out_alternate_infinite]"
                >
                  <div className="col-span-1">
                    <img
                      src="https://i.ibb.co/j3TJWdh/NIGERIAN-WOMEN-WITH-ONE-OR-MORE-100.jpg"
                      className="rounded-lg" alt="infographic"
                    />
                  </div>
                  <div className="col-span-3 flex flex-col justify-center">
                    <p>Nigerian economy is growing, Nigerian people are groaning...</p>
                    <span className="pt-2 text-[10px]">MAY 25, 2022</span>
                  </div>
                  <IconHeart
                    className="mb-8 text-red-300 cursor-pointer absolute top-4 right-4"
                    size="20"
                  />
                </div>
              </div>
              <div className="md:rotate-[2deg] mt-10 md:mt-12">
                <div
                  className="relative grid grid-cols-5 gap-4 border border-gray-100 shadow-md p-4 bg-transparent rounded-2xl animate-[bounce_2.5s_ease-in-out_alternate_infinite]"
                >
                  <div className="col-span-1">
                    <img
                      src="https://i.ibb.co/j3TJWdh/NIGERIAN-WOMEN-WITH-ONE-OR-MORE-100.jpg"
                      className="rounded-lg" alt="infographic"
                    />
                  </div>
                  <div className="col-span-3 flex flex-col justify-center">
                    <p>Nigerian economy is growing, Nigerian people are groaning...</p>
                    <span className="pt-2 text-[10px]">MAY 25, 2022</span>
                  </div>
                  <IconHeart
                    className="mb-8 text-red-300 cursor-pointer absolute top-4 right-4"
                    size="20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfographicsSection;
