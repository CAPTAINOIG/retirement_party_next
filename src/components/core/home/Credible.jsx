import React from "react";
import Tilt from "react-parallax-tilt";

const Credible = () => {
  return (
    <div>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative text-right">
            <h2 className="md:pt-[170px] text-4xl md:text-6xl font-medium tracking-tight text-gray-900">
              Credible Lorem ipsum dolor sit amet.
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 md:py-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              ullam beatae rem, error eius culpa pariatur excepturi nostrum
              animi repellat?
            </p>
            <button
              className="bg-black text-[18px] text-white px-6 py-3 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
              Get started
            </button>
          </div>
          <div className="relative">
            <Tilt>
              <img className="w-[90%]" src="/images/phone.png" alt=""/>
            </Tilt>
          </div>
        </div>
      </div>

      <style jsx>{ `
        .bg-dotted {
          background: #fff url(/images/footer_bg.webp);
          background-size: contain;
        }

        .curved-header {
          clip-path: url(#wave-hero);
        }
      ` }</style>
      <div/>
    </div>
  );
};

export default Credible;
