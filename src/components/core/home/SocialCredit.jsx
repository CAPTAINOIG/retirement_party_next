import React from "react";

const SocialCredit = () => {
  return (
    <>
      <div className="container max-w-8xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <h2 className="md:pt-[150px] text-4xl md:text-6xl font-medium tracking-tight text-gray-900">
              Social credit Lorem ipsum dolor sit amet.
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 md:py-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              ullam beatae rem, error eius culpa pariatur excepturi nostrum
              animi repellat?
            </p>
            <button className="bg-black text-[18px] text-white px-6 py-3 rounded-[12px] font-dmSans hover:border hover:border-black hover:bg-transparent hover:text-black">
              Get started
            </button>
          </div>
          <div className="relative">
            <div className="absolute h-[300px] w-[300px] bg-orange-300 rounded-full left-[7rem]">
              <div className='relative h-[300px] w-[300px] rounded-full after:content-[""] after:absolute after:h-[30px] after:w-[30px] after:rounded-full after:bg-[#86B5B8] after:top-[4rem] after:border-2 after:border-white rotate'></div>
            </div>
            <div className="absolute h-[300px] w-[300px] bg-red-300 rounded-full right-[3rem] top-[10rem]">
              <div className='relative h-[300px] w-[300px] rounded-full after:content-[""] after:absolute after:h-[30px] after:w-[30px] after:rounded-full after:bg-[#F4BD68] after:top-[4rem] after:border-2 after:border-white rotate animation-duration-8'></div>
            </div>
            <div className="absolute h-[150px] w-[150px] bg-teal-300 rounded-full bottom-[-7rem] left-[9rem]">
              <div className='relative h-[150px] w-[150px] rounded-full after:content-[""] after:absolute after:h-[25px] after:w-[25px] after:rounded-full after:bg-[#ED6B49] after:top-[6rem] after:border-2 after:border-white rotate animation-delay-3'></div>
            </div>
            <div className="z-[99] relative">
              <div className="absolute bg-gray-100 h-[470px] w-[250px] rounded-lg top-[3rem] right-[7rem] shadow-md p-4 bounce">
                <svg
                  className="w-[7px]"
                  fill="#333"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
                <div className="py-6">
                  <p className="text-base md:text-lg text-gray-600 font-bold">
                    Credibiity analysis
                  </p>
                  <p className="md:text-sm text-gray-600 pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <div className="relative">
                  <div className="flex bg-white rounded-lg p-4 flex-col text-center shadow-lg slant-card ">
                    <img className="mx-auto" src="/images/face-one.png" alt="" />
                    <p className="text-base md:text-lg text-gray-600 font-bold pt-4">
                      Bukunmi Dimeji.
                    </p>
                    <p className="md:text-sm text-gray-600 pb-2">
                      Head writer at the cable
                    </p>
                    <svg
                      className="w-[30px] mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </div>
                  <div className="flex bg-white rounded-lg p-4 flex-col text-center shadow-lg slant-card-two">
                    <img className="mx-auto" src="/images/face-two.png" alt="" />
                    <p className="text-base md:text-lg text-gray-600 font-bold pt-4">
                      Bukunmi Dimeji.
                    </p>
                    <p className="md:text-sm text-gray-600 pb-2">
                      Head writer at the cable
                    </p>
                    <svg
                      className="w-[30px] mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </div>
                  <div className="flex bg-white rounded-lg p-4 flex-col text-center shadow-lg slant-card-three">
                    <img className="mx-auto" src="/images/face-three.png" alt="" />
                    <p className="text-base md:text-lg text-gray-600 font-bold pt-4">
                      Bukunmi Dimeji.
                    </p>
                    <p className="md:text-sm text-gray-600 pb-2">
                      Head writer at the cable
                    </p>
                    <svg
                      className="w-[30px] mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </div>
                  <div className="flex bg-white rounded-lg p-4 flex-col text-center shadow-lg slant-card-four">
                    <img className="mx-auto" src="/images/face-four.png" alt="" />
                    <p className="text-base md:text-lg text-gray-600 font-bold pt-4">
                      Bukunmi Dimeji.
                    </p>
                    <p className="md:text-sm text-gray-600 pb-2">
                      Head writer at the cable
                    </p>
                    <svg
                      className="w-[30px] mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </div>
                </div>
                <button className="mt-6 w-full bg-black text-sm text-white px-4 py-2 rounded-[12px] font-dmSans">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rotate {
          animation: rotate 7s linear infinite;
        }

        .animation-delay-3 {
          animation-delay: 3s;
        }

        .animation-duration-8 {
          animation-duration: 8s;
        }

        @-webkit-keyframes rotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(359deg);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(359deg);
          }
        }

        .bounce {
          animation: bounce 2s ease infinite alternate;;
        }

        @keyframes bounce {
          0% {
            transform: translateY(0px);
          }

          100% {
            transform: translateY(-20px);
          }
        }

        .slant-card {
          transform: translate(-34px, -10px) rotate(-10deg);
          animation: flip 5s cubic-bezier(0.8, 0, 0, 0.8) infinite;
        }

        .slant-card-two {
          position: absolute;
          inset: 0;
          transform: translate(-34px, -10px) rotate(-10deg);
          animation: fliptwo 5s cubic-bezier(0.8, 0, 0, 0.8) infinite;
          transform-style: preserve-3d;
          transform: rotate3d(0, 1, 0, 180deg);
          opacity: 0;
        }

        .slant-card-three {
          position: absolute;
          inset: 0;
          transform: translate(-34px, -10px) rotate(-10deg);
          animation: flipthree 5s cubic-bezier(0.8, 0, 0, 0.8) infinite;
          transform-style: preserve-3d;
          transform: rotate3d(0, 1, 0, 180deg);
          opacity: 0;
        }

        .slant-card-four {
          position: absolute;
          inset: 0;
          transform: translate(-34px, -10px) rotate(-10deg);
          animation: flipfour 5s cubic-bezier(0.8, 0, 0, 0.8) infinite;
          transform-style: preserve-3d;
          transform: rotate3d(0, 1, 0, 180deg);
          opacity: 0;
        }

        @keyframes flip {
          0% {
            transform: rotate3d(0, 1, 0, 0deg);
            opacity: 1;
          }

          20% {
            opacity: 0;
          }

          25% {
            transform: rotate3d(0, 1, 0, 180deg);
            opacity: 0;
          }

          50% {
            transform: rotate3d(0, 1, 0, 360deg);
            opacity: 0;
          }

          75% {
            transform: rotate3d(0, 1, 0, 180deg);
            opacity: 0;
          }

          100% {
            transform: rotate3d(0, 1, 0, 0deg);
            opacity: 1;
          }
        }

        @keyframes fliptwo {
          0% {
            transform: rotate3d(0, 1, 0, 180deg);
            opacity: 0;
          }

          25% {
            transform: rotate3d(0, 1, 0, 0deg);
            opacity: 1;
          }

          40% {
            opacity: 0;
          }

          50% {
            transform: rotate3d(0, 1, 0, 360deg);
            opacity: 0;
          }

          75% {
            transform: rotate3d(0, 1, 0, 180deg);
            opacity: 0;
          }

          100% {
            transform: rotate3d(0, 0, 0, 0deg);
            opacity: 0;
          }
        }

        @keyframes flipthree {
          0% {
            transform: rotate3d(0, 0, 0, 0deg);
            opacity: 0;
          }

          25% {
            transform: rotate3d(0, 1, 0, 180deg);
            opacity: 0;
          }

          50% {
            transform: rotate3d(0, 1, 0, 360deg);
            opacity: 1;
          }

          70% {
            opacity: 0;
          }

          75% {
            transform: rotate3d(0, 1, 0, 180deg);
            opacity: 0;
          }

          100% {
            transform: rotate3d(0, 0, 0, 0deg);
            opacity: 0;
          }
        }

        @keyframes flipfour {
          0% {
            transform: rotate3d(0, 0, 0, 180deg);
            opacity: 0;
          }

          25% {
            transform: rotate3d(0, 1, 0, 180deg);
            opacity: 0;
          }

          50% {
            transform: rotate3d(0, 1, 0, 180deg);
            opacity: 0;
          }

          75% {
            transform: rotate3d(0, 1, 0, 0deg);
            opacity: 1;
          }

          85% {
            opacity: 0;
          }

          100% {
            transform: rotate3d(0, 0, 0, 0deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default SocialCredit;
