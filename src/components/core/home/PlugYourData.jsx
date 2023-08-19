"use client"
import React, {useEffect, useRef, useState} from 'react';
import Button from "@/components/global/Button";
import {IconArrowRight} from "@tabler/icons-react";
import TestRun from "@/components/core/shared/TestRun";
import Typed from "typed.js";
import {useInView} from "react-intersection-observer";

const PlugYourData = () => {
  const el = useRef(null);
  const section = useRef(null);
  const sect = useRef(null);
  const sectTwo = useRef(null);
  const sectThree = useRef(null)
  const typed = useRef(null);
  const {ref, inView, entry} = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true
  });

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    const options = {
      strings: [
        'Ah! Na correct question be dat. The largest economies for Africa dey vary from year to year, but as of now, na Naija (Nigeria) dey top the list. Dem follow am South Africa and Egypt. Dem three countries get strong economy wey dey burst brain. Dem dey chook mouth for Africa wella.'
      ],
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onBegin: (self) => {
        setCompleted(0)
      },
      onComplete: (self) => {
        handleScroll()
      },
    };
    if (inView) {
      typed.current = new Typed(el.current, options);
      return () => {
        typed.current.destroy();
      }
    }
  }, [inView]);

  useEffect(() => {
    const options = {
      strings: [
        'Oya, make I break am down for you, my guy. Nigeria dey sit for di top of di list as di largest economy for Africa. Dis na because we get plenty oil wey we dey export. E dey bring us plenty money and dey ginger our economy. Na why them dey call us the Giants of Africa my guy.'
      ],
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      startDelay: 7500,
      onComplete: (self) => {
        setCompleted(3)
        section.current.style.transform = "translateY(-690px)"
      },
    };
    if (inView) {
      typed.current = new Typed(sect.current, options);
      return () => {
        typed.current.destroy();
      }
    }
  }, [inView]);
  useEffect(() => {
    const options = {
      strings: [
        'South Africa dey come second. Dem get diverse economy wey dey include mining, tourism, and manufacturing. Dem dey produce plenty gold, diamonds, and oda minerals wey dem dey sell to di world. Plus, dem get one of di best-developed infrastructure for Africa. Shey you dey get the matter my guy'
      ],
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      startDelay: 13000,
      onComplete: (self) => {
        setCompleted(4)
        section.current.style.transform = "translateY(-980px)"
      },
    };
    if (inView) {
      typed.current = new Typed(sectTwo.current, options);
      return () => {
        typed.current.destroy();
      }
    }
  }, [inView]);
  useEffect(() => {
    const options = {
      strings: [
        'Egypt dey follow for third. Dem get strong sectors like tourism, agriculture, and Suez Canal wey dey bring dem cash. For inside Africa, dem three countries dey shine wella like sun. Dem dey do plenty business and attract investors sotay, dem dey blow our mind with dia economic strength. Hope say dis yan clear for you now?'
      ],
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      startDelay: 18500,
      onComplete: (self) => {
        setCompleted(5)
        section.current.style.transform = "translateY(-1120px)"
      },
    };
    if (inView){
      typed.current = new Typed(sectThree.current, options);
      return () => {
        typed.current.destroy();
      }
    }
  }, [inView]);

  const handleScroll = () =>{
    if (completed === 0) {
      setCompleted(1)
      section.current.style.transform = "translateY(-110px)"
      setTimeout(function(){
        section.current.style.transform = "translateY(-400px)"
        setCompleted(2)
      }, 2000);
    }
  }
  return (
    <>
      <div ref={ref} className="container">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="md:h-[550px] overflow-hidden md:bg-white md:shadow md:rounded-[24px] md:p-10">
            <img className="block md:hidden" src="/images/1.png"/>
            <div ref={section} className={`duration-500 ease-in-out hidden md:block`}>
              <div className="flex items-center justify-end">
                <div className="flex items-center gap-3">
                  <div className="bg-[#F1F5F9] p-6 rounded-[12px]">
                    <p className="text-base md:text-lg">
                      What are the largest <br/>economies in Africa
                    </p>
                  </div>
                  <img className="w-[50px]" src="/images/face-one.png"/>
                </div>
              </div>
              <div className="my-8 w-[80%]">
                <div className="bg-[#F1F5F9] p-6 rounded-[24px] min-h-[240px]">
                  <p ref={el} className="text-base md:text-lg">
                  </p>
                </div>
              </div>
              <div className={`mb-8 items-center justify-end ${completed >= 1 ? 'flex' : 'hidden'}`}>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F1F5F9] p-6 rounded-[12px]">
                    <p className="text-base md:text-lg">
                      Shey you go fit explain<br/>further?
                    </p>
                  </div>
                  <img className="w-[50px]" src="/images/face-one.png"/>
                </div>
              </div>
              <div className={`mb-8 w-[80%] ${completed >= 2 ? 'block' : 'hidden'}`}>
                <div className="bg-[#F1F5F9] p-6 rounded-[24px] min-h-[260px]">
                  <p ref={sect} className="text-base md:text-lg">
                  </p>
                </div>
              </div>
              <div className={`mb-8 w-[80%] ${completed >= 3 ? 'block' : 'hidden'}`}>
                <div className="bg-[#F1F5F9] p-6 rounded-[24px] min-h-[260px]">
                  <p ref={sectTwo} className="text-base md:text-lg">
                  </p>
                </div>
              </div>
              <div className={`mb-8 w-[80%] ${completed >= 4 ? 'block' : 'hidden'}`}>
                <div className="bg-[#F1F5F9] p-6 rounded-[24px] min-h-[260px]">
                  <p ref={sectThree} className="text-base md:text-lg">
                  </p>
                </div>
              </div>
              <div className={`mb-8 items-center justify-end ${completed >= 5 ? 'flex' : 'hidden'}`}>
                <div className="flex items-center gap-3">
                  <div className="bg-[#F1F5F9] p-6 rounded-[12px]">
                    <p className="text-base md:text-lg">
                      Yes, E don over clear <br/> for eye
                    </p>
                  </div>
                  <img className="w-[50px]" src="/images/face-one.png"/>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-[90%]">
                  <input disabled type="text" name="email" id="topbar-search"
                         className="bg-transparent border border-gray-300 w-full text-base md:text-lg text-gray-500 rounded-[30px] block w-full pl-6 py-4 my-2"
                         placeholder="Type here ..."/>
                </div>
                <div className="w-[10%] flex justify-end">
                  <div className="h-[50px] w-[50px] rounded-full bg-[#2B5387] p-4">
                    <img src="/images/1.svg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-12 max-w-lg mx-auto">
            <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1]">
              Plug your business data and docs,
              Chat with <span className="text-primary-600">Lens</span>.
            </h2>
            <p className="mt-6 text-base md:text-lg">
              We are building Africa's most robust data assistant.
            </p>
            <Button
              onClick={() => setIsChatOpen(true)}
              color="black" className="mt-12" rightIcon={<IconArrowRight/>} size="lg"
            >
              Get started
            </Button>
          </div>
        </div>
      </div>

      <TestRun
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  );
};

export default PlugYourData;
