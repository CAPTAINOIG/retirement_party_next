import React from "react";
import Button from "@/components/global/Button.jsx";
import { IconArrowRight, IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";

const SocialCredit = () => {
  return (
    <div>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1]">
              Let's make magic pop from your customer data.
            </h2>
            <ul className="list-disc list-inside mt-6 text-base md:text-lg">
              <li>We integrate your data set for insight</li>
              <li>Our AI models makes sense of everything</li>
              <li>Get result in infographics, charts, reports, etc</li>
            </ul>
            <Button color="black" className="mt-12" size="lg" rightIcon={ <IconArrowRight/> }>
              Let's get started
            </Button>
          </div>
          <div className="relative -order-1 md:order-1 flex md:justify-center">
            <div className="relative w-full sm:w-[400px]">
              <div
                className="absolute blur-2xl opacity-20 h-[300px] w-[300px] bg-orange-300 rounded-full -top-5 -left-5"
              />
              <div
                className="absolute blur-2xl opacity-20 h-[300px] w-[300px] bg-red-300 rounded-full -right-6 top-20"
              />
              <div
                className="absolute blur-2xl opacity-20 h-[250px] w-[250px] bg-teal-300 rounded-full -bottom-5 -left-5"
              />
              <div className="relative z-[3]">
                <div className="">
                  <div className="relative mt-3">
                    <div className="flex bg-white shadow border rounded-3xl px-4 py-20 flex-col text-center slant-card">
                      <img className="mx-auto w-40 h-40" src="/images/face-one.png" alt=""/>
                      <p className="text-base md:text-lg font-bold mt-8">
                        Bukunmi Dimeji.
                      </p>
                      <p className="text-lg opacity-80 pb-2">
                        Head writer at the cable
                      </p>
                      <div className="flex justify-center items-center space-x-4 mt-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <IconBrandLinkedin size="24" className="text-white"/>
                        </div>
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <IconBrandFacebook size="24" className="text-white"/>
                        </div>
                        <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center">
                          <IconBrandTwitter size="24" className="text-white"/>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex bg-white shadow border rounded-3xl px-4 py-20 flex-col text-center slant-card-two">
                      <img className="mx-auto w-40 h-40" src="/images/face-two.png" alt=""/>
                      <p className="text-base md:text-lg font-bold mt-8">
                        Bukunmi Dimeji.
                      </p>
                      <p className="text-lg opacity-80 pb-2">
                        Head writer at the cable
                      </p>
                      <div className="flex justify-center items-center space-x-4 mt-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <IconBrandLinkedin size="24" className="text-white"/>
                        </div>
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <IconBrandFacebook size="24" className="text-white"/>
                        </div>
                        <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center">
                          <IconBrandTwitter size="24" className="text-white"/>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex bg-white shadow border rounded-3xl px-4 py-20 flex-col text-center slant-card-three">
                      <img className="mx-auto w-40 h-40" src="/images/face-three.png" alt=""/>
                      <p className="text-base md:text-lg font-bold mt-8">
                        Bukunmi Dimeji.
                      </p>
                      <p className="text-lg opacity-80 pb-2">
                        Head writer at the cable
                      </p>
                      <div className="flex justify-center items-center space-x-4 mt-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <IconBrandLinkedin size="24" className="text-white"/>
                        </div>
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <IconBrandFacebook size="24" className="text-white"/>
                        </div>
                        <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center">
                          <IconBrandTwitter size="24" className="text-white"/>
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex bg-white shadow border rounded-3xl px-4 py-20 flex-col text-center slant-card-four">
                      <img className="mx-auto w-40 h-40" src="/images/face-four.png" alt=""/>
                      <p className="text-base md:text-lg font-bold mt-8">
                        Bukunmi Dimeji.
                      </p>
                      <p className="text-lg opacity-80 pb-2">
                        Head writer at the cable
                      </p>
                      <div className="flex justify-center items-center space-x-4 mt-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <IconBrandLinkedin size="24" className="text-white"/>
                        </div>
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <IconBrandFacebook size="24" className="text-white"/>
                        </div>
                        <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center">
                          <IconBrandTwitter size="24" className="text-white"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{ `
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

        .slant-card {
          transform: translate(-34px, -10px) rotate(-10deg);
          animation: flip 5s cubic-bezier(0.8, 0, 0, 0.8) infinite;
        }

        .slant-card-two {
          position: absolute;
          inset: 0;
          animation: fliptwo 5s cubic-bezier(0.8, 0, 0, 0.8) infinite;
          transform-style: preserve-3d;
          transform: rotate3d(0, 1, 0, 180deg);
          opacity: 0;
        }

        .slant-card-three {
          position: absolute;
          inset: 0;
          animation: flipthree 5s cubic-bezier(0.8, 0, 0, 0.8) infinite;
          transform-style: preserve-3d;
          transform: rotate3d(0, 1, 0, 180deg);
          opacity: 0;
        }

        .slant-card-four {
          position: absolute;
          inset: 0;
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
      ` }</style>
    </div>
  );
};

export default SocialCredit;
