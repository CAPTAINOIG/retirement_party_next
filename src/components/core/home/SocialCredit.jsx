import React from "react";
import Button from "@/components/global/Button.jsx";
import { IconArrowRight, IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";

const SocialCredit = () => {
  return (
    <>
      <div className="container max-w-8xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-medium leading-tight md:leading-[1.2]">
              Social credit Lorem ipsum dolor sit amet.
            </h2>
            <p className="mt-6 text-base md:text-lg opacity-80">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              ullam beatae rem, error eius culpa pariatur excepturi nostrum
              animi repellat?
            </p>
            <Button color="black" className="mt-12" size="lg" rightIcon={ <IconArrowRight/> }>Get started</Button>
          </div>
          <div className="relative -order-1 md:order-1 flex md:justify-center">
            <div className="relative w-full sm:w-[350px]">
              <div
                className="absolute blur-lg opacity-10 h-[300px] w-[300px] bg-orange-300 rounded-full -top-5 -left-5"
              />
              <div
                className="absolute blur-lg opacity-10 h-[300px] w-[300px] bg-red-300 rounded-full -right-10 top-10"
              />
              <div
                className="absolute blur-lg opacity-10 h-[250px] w-[250px] bg-teal-300 rounded-full -bottom-5 -left-5"
              />
              <div className="z-20">
                <div className="bg-slate-300/40 backdrop-blur-lg rounded-2xl px-10 py-12 bounce">
                  <div className="pb-6">
                    <p className="text-xl font-medium">
                      Credibility analysis
                    </p>
                    <p className="mt-2 opacity-80 leading-tight">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="relative mt-3">
                    <div className="flex bg-slate-50 rounded-2xl px-4 py-6 flex-col text-center slant-card ">
                      <img className="mx-auto" src="/images/face-one.png" alt=""/>
                      <p className="text-base md:text-lg opacity-80 font-bold pt-4">
                        Bukunmi Dimeji.
                      </p>
                      <p className="md:text-sm opacity-80 pb-2">
                        Head writer at the cable
                      </p>
                      <div className="flex justify-center items-center space-x-4 mt-3">
                        <IconBrandLinkedin size="24" className="text-blue-600"/>
                        <IconBrandFacebook size="24" className="text-blue-500"/>
                        <IconBrandTwitter size="24" className="text-cyan-600"/>
                      </div>
                    </div>
                    <div className="flex bg-slate-50 rounded-2xl px-4 py-6 flex-col text-center slant-card-two">
                      <img className="mx-auto" src="/images/face-two.png" alt=""/>
                      <p className="text-base md:text-lg opacity-80 font-bold pt-4">
                        Bukunmi Dimeji.
                      </p>
                      <p className="md:text-sm opacity-80 pb-2">
                        Head writer at the cable
                      </p>
                      <div className="flex justify-center items-center space-x-4 mt-3">
                        <IconBrandLinkedin size="24" className="text-blue-600"/>
                        <IconBrandFacebook size="24" className="text-blue-500"/>
                        <IconBrandTwitter size="24" className="text-cyan-600"/>
                      </div>
                    </div>
                    <div className="flex bg-slate-50 rounded-2xl px-4 py-6 flex-col text-center slant-card-three">
                      <img className="mx-auto" src="/images/face-three.png" alt=""/>
                      <p className="text-base md:text-lg opacity-80 font-bold pt-4">
                        Bukunmi Dimeji.
                      </p>
                      <p className="md:text-sm opacity-80 pb-2">
                        Head writer at the cable
                      </p>
                      <div className="flex justify-center items-center space-x-4 mt-3">
                        <IconBrandLinkedin size="24" className="text-blue-600"/>
                        <IconBrandFacebook size="24" className="text-blue-500"/>
                        <IconBrandTwitter size="24" className="text-cyan-600"/>
                      </div>
                    </div>
                    <div className="flex bg-slate-50 rounded-2xl px-4 py-6 flex-col text-center slant-card-four">
                      <img className="mx-auto" src="/images/face-four.png" alt=""/>
                      <p className="text-base md:text-lg opacity-80 font-bold pt-4">
                        Bukunmi Dimeji.
                      </p>
                      <p className="md:text-sm opacity-80 pb-2">
                        Head writer at the cable
                      </p>
                      <div className="flex justify-center items-center space-x-4 mt-3">
                        <IconBrandLinkedin size="24" className="text-blue-600"/>
                        <IconBrandFacebook size="24" className="text-blue-500"/>
                        <IconBrandTwitter size="24" className="text-cyan-600"/>
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
      ` }</style>
    </>
  );
};

export default SocialCredit;
