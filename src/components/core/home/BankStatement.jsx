import React from "react";
import Tilt from 'react-parallax-tilt';

const BankStatement = () => {
  return (
    <div className="relative">
      <div className="container max-w-8xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-medium leading-tight md:leading-[1.2]">
              Analyse your bank statements
            </h2>
            <p className="mt-6 text-base md:text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eveniet harum omnis possimus sit
              tempora unde!
            </p>
          </div>
          <div className="relative -order-1 md:order-1">
            <div>
              <img className="w-[50px] absolute right-0 top-[14rem]" src="/images/star.svg" alt=""/>
              <img className="w-[20px] absolute left-0" src="/images/dot1.svg" alt=""/>
            </div>
            <Tilt>
              <img className="w-[90%]" src="/images/puzzle.svg" alt=""/>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankStatement;
