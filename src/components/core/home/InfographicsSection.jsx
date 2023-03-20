import React from "react";
import { IconHeart, IconArrowRight } from "@tabler/icons-react";
import Button from "@/components/global/Button.jsx";

const InfographicsSection = () => {
  return (
    <>
      <div className="relative">
        <div className="container max-w-8xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
              <div className="relative grid grid-cols-5 gap-4 border border-gray-100 shadow-md p-4 bg-transparent rounded-2xl bounceOne">
                <div className="col-span-1">
                  <img
                    className="rounded-lg"
                    src="https://i.ibb.co/j3TJWdh/NIGERIAN-WOMEN-WITH-ONE-OR-MORE-100.jpg"
                    alt=""
                  />
                </div>
                <div className="col-span-3 flex flex-col justify-center">
                  <p>
                    Nigerian economy is growing, Nigerian people are groaning...
                  </p>
                  <span className="pt-2 text-[10px]">MAY 25, 2022</span>
                </div>
                <IconHeart
                  className="mb-8 text-red-300 cursor-pointer absolute top-4 right-4"
                  size="20"
                />
              </div>
              <div className="relative grid grid-cols-5 gap-4 border border-gray-100 shadow-md p-4 bg-transparent rounded-2xl mt-[4rem] swerve-card-two bounceTwo">
                <div className="col-span-1">
                  <img
                    className="rounded-lg"
                    src="https://i.ibb.co/j3TJWdh/NIGERIAN-WOMEN-WITH-ONE-OR-MORE-100.jpg"
                    alt=""
                  />
                </div>
                <div className="col-span-3 flex flex-col justify-center">
                  <p>
                    Nigerian economy is growing, Nigerian people are groaning...
                  </p>
                  <span className="pt-2 text-[10px]">MAY 25, 2022</span>
                </div>
                <IconHeart
                  className="mb-8 text-red-300 cursor-pointer absolute top-4 right-4"
                  size="20"
                />
              </div>
            </div>
            <div className="relative -order-1 md:order-1">
              <h2 className="text-4xl md:text-5xl font-medium leading-tight md:leading-[1.2]">
                Lorem ipsum dolor sit amet <span className="blocked-text text-4xl md:text-5xl">infographics</span>
              </h2>
              <p className="mt-6 text-base md:text-lg opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti eveniet harum omnis possimus sit tempora unde!
              </p>
              <Button
                color="black"
                className="mt-12"
                size="lg"
                rightIcon={<IconArrowRight />}
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bounceOne {
          animation: bounceOne 2s ease infinite alternate;
        }
        .bounceTwo {
          animation: bounceTwo 2s ease infinite alternate;
        }

        @keyframes bounceOne {
          0% {
            transform: translateY(0px) rotate(4deg);
          }

          100% {
            transform: translateY(-20px) rotate(4deg);
          }
        }
        @keyframes bounceTwo {
          0% {
            transform: translateY(0px) rotate(-3deg);
          }

          100% {
            transform: translateY(-20px) rotate(-3deg);
          }
        }
       .blocked-text{
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #1F2937;
        -webkit-background-clip: text;
        font-family: Khand, sans-serif;
        font-weight: 700;
        line-height: 1;
        margin: auto;
        text-align: center;
       }
      `}</style>
    </>
  );
};

export default InfographicsSection;
