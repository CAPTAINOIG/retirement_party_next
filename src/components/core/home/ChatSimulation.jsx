import React, {useEffect, useRef, useState} from 'react';
import Typed from "typed.js";
import {useInView} from "react-intersection-observer";

const ChatSimulation = () => {
  const el = useRef(null);
  const section = useRef(null);
  const sect = useRef(null);
  const sectTwo = useRef(null);
  const sectThree = useRef(null)
  const sectFour = useRef(null)
  const sectFive = useRef(null)
  const typed = useRef(null);
  const {ref, inView} = useInView({
    threshold: 0.5,
    triggerOnce: true
  });
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    const optionOne = {
      strings: [
        'Ok, I am always ready. Hit me.'
      ],
      typeSpeed: 10,
      backSpeed: 10,
      smartBackspace: true,
      showCursor: false,
      onComplete: () => {
        handleScroll()
      },
    };
    const optionTwo = {
      strings: [
        'Analyzing your pdf'
      ],
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 19500,
      smartBackspace: true,
      showCursor: false,
      startDelay: 500,
      onComplete: () => {
        setCompleted(3)
      },
    };
    const optionThree = {
      strings: [
        'I am done analyzing...ask me anything'
      ],
      typeSpeed: 10,
      backSpeed: 10,
      smartBackspace: true,
      backDelay: 20500,
      showCursor: false,
      startDelay: 500,
      onComplete: () => {
        setCompleted(4)
        setTimeout(function () {
          section.current.style.transform = "translateY(-640px)"
          setCompleted(5)
        }, 2000);
      },
    };
    const optionFour = {
      strings: [
        'From what I see, Access bank made the most money from e-banking charges in HY 2021. Topping the lot with N29.9b followed by UBA and FBN, the third on the list making more than FCMB, Union and Sterling put together'
      ],
      typeSpeed: 10,
      backSpeed: 10,
      smartBackspace: true,
      showCursor: false,
      startDelay: 500,
      onComplete: () => {
        setCompleted(6)
        section.current.style.transform = "translateY(-840px)"
        setTimeout(function () {
          section.current.style.transform = "translateY(-940px)"
          setCompleted(7)
        }, 2000);
      },
    };
    const optionFive = {
      strings: [
        'Ok will do. Give me a sec to generate it..'
      ],
      typeSpeed: 10,
      backSpeed: 10,
      smartBackspace: true,
      showCursor: false,
      startDelay: 500,
      onComplete: () => {
        setCompleted(8)
        section.current.style.transform = "translateY(-1120px)"
        setTimeout(function () {
          section.current.style.transform = "translateY(-1220px)"
          setCompleted(9)
        }, 2000);
        setTimeout(function () {
          section.current.style.transform = "translateY(-1325px)"
          setCompleted(10)
        }, 3000);
      },
    };
    const optionSix = {
      strings: [
        'Awesome is what we do'
      ],
      typeSpeed: 10,
      backSpeed: 10,
      smartBackspace: true,
      showCursor: false,
      startDelay: 500,
      onComplete: () => {
        setTimeout(function () {
          setCompleted(0)
          section.current.style.trasnsitionDuration = "3s"
          section.current.style.transform = "translateY(0px)"
        }, 2000);
      },
    };
    if (inView) {
      if (completed === 0) {
        typed.current = new Typed(el.current, optionOne);
      }
      if (completed === 2) {
        typed.current = new Typed(sect.current, optionTwo);
      }
      if (completed === 3) {
        typed.current = new Typed(sectTwo.current, optionThree);
      }
      if (completed === 5) {
        typed.current = new Typed(sectThree.current, optionFour);
      }
      if (completed === 7) {
        typed.current = new Typed(sectFour.current, optionFive);
      }
      if (completed === 10) {
        typed.current = new Typed(sectFive.current, optionSix);
      }
      return () => {
        // typed.current.destroy();
      }
    }
  }, [inView, completed]);


  const handleScroll = () => {
    if (completed === 0) {
      setTimeout(function () {
        setCompleted(1)
        section.current.style.transform = "translateY(-110px)"
      }, 1000);
      setTimeout(function () {
        section.current.style.transform = "translateY(-400px)"
        setCompleted(2)
      }, 3000);
    }
  };

  return (
    <div ref={ref} className="md:h-[550px] overflow-hidden md:bg-white md:shadow md:rounded-[24px] md:p-10 relative">
      <img className="block md:hidden" src="/images/1.png" alt="1"/>
      <div ref={section} className={`duration-500 ease-in-out hidden md:block`}>
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-3">
            <div className="bg-[#F1F5F9] p-6 rounded-[12px]">
              <p className="text-base md:text-lg">
                Hello Bambi, I have a document for you
              </p>
            </div>
            <img className="w-[50px]" src="/images/face-one.png" alt="face one"/>
          </div>
        </div>
        <div className="my-8 w-[80%]">
          <div className="bg-[#F1F5F9] p-6 rounded-[12px] min-h-[70px]">
            <p ref={el} className="text-base md:text-lg">
            </p>
          </div>
        </div>
        <div className={`mb-8 items-center justify-end ${completed >= 1 ? 'flex' : 'hidden'}`}>
          <div className="flex items-end gap-3">
            <img alt="img" className="shadow rounded-lg w-[80%]" src="/images/9.png"/>
            <img className="w-[50px]" src="/images/face-one.png" alt="face one"/>
          </div>
        </div>
        <div className={`mb-8 w-[80%] ${completed >= 2 ? 'block' : 'hidden'}`}>
          <div className="bg-[#F1F5F9] p-6 rounded-[12px] min-h-[70px]">
            <p ref={sect} className="text-base md:text-lg">
            </p>
          </div>
        </div>
        <div className={`mb-8 w-[80%] ${completed >= 3 ? 'block' : 'hidden'}`}>
          <div className="bg-[#F1F5F9] p-6 rounded-[12px] min-h-[70px]">
            <p ref={sectTwo} className="text-base md:text-lg">
            </p>
          </div>
        </div>
        <div className={`mb-8 items-center justify-end ${completed >= 4 ? 'flex' : 'hidden'}`}>
          <div className="flex items-center gap-3">
            <div className="bg-[#F1F5F9] p-6 rounded-[12px]">
              <p className="text-base md:text-lg">
                Gimme a summary of Bank earnings <br/> from this data
              </p>
            </div>
            <img className="w-[50px]" src="/images/face-one.png" alt="face-one"/>
          </div>
        </div>
        <div className={`mb-8 w-[80%] ${completed >= 5 ? 'block' : 'hidden'}`}>
          <div className="bg-[#F1F5F9] p-6 rounded-[24px] min-h-[210px]">
            <p ref={sectThree} className="text-base md:text-lg">
            </p>
          </div>
        </div>
        <div className={`mb-8 items-center justify-end ${completed >= 6 ? 'flex' : 'hidden'}`}>
          <div className="flex items-center gap-3">
            <div className="bg-[#F1F5F9] p-6 rounded-[12px]">
              <p className="text-base md:text-lg">
                Give me the infographics
              </p>
            </div>
            <img className="w-[50px]" src="/images/face-one.png" alt="face-one"/>
          </div>
        </div>
        <div className={`mb-8 w-[80%] ${completed >= 7 ? 'block' : 'hidden'}`}>
          <div className="bg-[#F1F5F9] p-6 rounded-[12px] min-h-[70px]">
            <p ref={sectFour} className="text-base md:text-lg">
            </p>
          </div>
        </div>
        <div className={`mb-8 items-center justify-start ${completed >= 8 ? 'flex' : 'hidden'}`}>
          <div className="flex items-center gap-3">
            <img alt="img" className="shadow rounded-lg w-full" src="/images/7.png"/>
          </div>
        </div>
        <div className={`mb-8 items-center justify-end ${completed >= 9 ? 'flex' : 'hidden'}`}>
          <div className="flex items-center gap-3">
            <div className="bg-[#F1F5F9] p-6 rounded-[12px]">
              <p className="text-base md:text-lg">
                Awesome
              </p>
            </div>
            <img className="w-[50px]" src="/images/face-one.png" alt="face-one"/>
          </div>
        </div>
        <div className={`mb-8 w-[80%] ${completed >= 10 ? 'block' : 'hidden'}`}>
          <div className="bg-[#F1F5F9] p-6 rounded-[12px] min-h-[70px]">
            <p ref={sectFive} className="text-base md:text-lg">
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 absolute bottom-3 right-0 w-full p-6">
        <div className="w-[90%]">
          <input
            disabled type="text" name="email" id="topbar-search"
            className="bg-transparent border border-gray-300 text-base md:text-lg text-gray-500 rounded-[30px] block w-full pl-6 py-4 my-2"
            placeholder="Type here ..."
          />
        </div>
        <div className="w-[10%] flex justify-end">
          <div className="h-[50px] w-[50px] rounded-full bg-[#2B5387] p-4">
            <img src="/images/1.svg" alt="1"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSimulation;
