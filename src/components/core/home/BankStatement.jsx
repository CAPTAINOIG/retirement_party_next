import React from "react";
import Tilt from 'react-parallax-tilt';

const BankStatement = () => {
  return (
    <div>
      <div className="container max-w-8xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <div>
                <img className="w-[50px] absolute right-0 top-[14rem]" src="/images/star.svg" alt="" />
                <img className="w-[20px] absolute left-0" src="/images/dot3.svg" alt="" />
            </div>
            <Tilt>
            <img className="w-[90%]" src="/images/puzzle.svg" alt="" />
            </Tilt>
          </div>
          <div className="relative">
            <div className="">
                <img className="w-[80px] absolute right-0" src="/images/curly-stairs.svg" alt="" />
                <img className="w-[20px] absolute bottom-0" src="/images/dot1.svg" alt="" />
                <img className="w-[50px] absolute bottom-[5rem] right-10" src="/images/curly.svg" alt="" />
            </div>
            <h2 className="md:pt-[100px] text-4xl md:text-6xl font-medium tracking-tight text-gray-900">
              Analyse your bank statements
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 md:py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, esse.
            </p>
            <button className="bg-black text-[18px] text-white px-6 py-3 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankStatement;
