import React, {useEffect, useRef} from "react";
import Button from "@/components/global/Button.jsx";
import {IconArrowRight} from "@tabler/icons-react";
import Link from "next/link";
import Typed from "typed.js";

const InsightsOnTheGo = () => {
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        'An infographics showing the countries with the most population in Africa. Nigeria is the most populated African country and it shows that for every 100 Africans, 16 of them are Nigerians.',
        'A chart depicting the top 10 Foreign Direct Investment (FDI) that came into Africa in 2021. South Africa attracted the most investment, followed by Egypt and Mozambique.',
        'The top 10 easiest places to enforce contracts in 2018 were Kaduna, Bauchi, Jigawa, Borno, Katsina, Kebbi, Yobe, Edo, Ondo, and Kano. These states had the most favorable contract enforcement systems.',
      ],
      typeSpeed: 10,
      backSpeed: 10,
      backDelay: 2000,
      loop: true,
      smartBackspace: true,
      showCursor: false
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    }
  }, []);
  return (
    <div className="overflow-hidden md:overflow-visible">
      <div className="container">
        <div className="md:grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="relative col-span-6">
            <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1] max-w-lg">
              Get insights on various topics on the go.
            </h2>
            <p className="mt-6 text-base md:text-lg max-w-sm">
              Chat with Lens for insights on topics like economy, business, education, election etc
            </p>
            <Link href={'/infographics'}>
              <Button color="black" className="mt-12" size="lg" rightIcon={<IconArrowRight/>}>
                Let's go
              </Button>
            </Link>
          </div>
          <div
            className="relative col-span-4 -order-1 md:order-2 flex md:justify-center w-full overflow-hidden md:overflow-visible py-4"
          >
            <div className="relative w-full">
              <img alt="img" className="mt-10 w-full block md:hidden" src="/images/5.png" />
              <div className="relative z-[3] hidden md:block">
                <div className="absolute animate-bounce bg-white border shadow rounded-lg top-[5rem] left-[-5rem] p-6">
                  <div className="flex items-center gap-4 my-3">
                    <svg className="w-[40px] h-[40px] rounded-full bg-black fill-white p-2"
                         xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                      <path
                        d="M319-250h322v-60H319v60Zm0-170h322v-60H319v60ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm331-554v-186H220v680h520v-494H551ZM220-820v186-186 680-680Z"/>
                    </svg>
                    <p className="text-base md:text-lg max-w-sm">
                      Infographics on Africa
                    </p>
                  </div>
                  <div className="flex items-center gap-4 my-3">
                    <svg className="w-[40px] h-[40px] rounded-full bg-black fill-white p-2"
                         xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                      <path
                        d="M140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v460q0 23-18.5 41.5T820-160H140Zm0-60h680v-460H456l-60-60H140v520Zm0 0v-520 520Z"/>
                    </svg>
                    <p className="text-base md:text-lg max-w-sm">
                      Africa
                    </p>
                  </div>
                  <div className="flex items-center gap-4 my-3">
                    <svg className="w-[40px] h-[40px] rounded-full bg-black fill-white p-2"
                         xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                      <path
                        d="M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Zm300 230q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/>
                    </svg>
                    <p className="text-base md:text-lg max-w-sm">
                      2023
                    </p>
                  </div>
                </div>
                <div
                  className="absolute min-h-[250px] w-[400px] bg-white border shadow rounded-lg bottom-[5rem] right-[-15rem] p-6">
                  <div className="flex items-center gap-2 my-3">
                    <svg className="w-[30px] h-[30px] fill-black"
                         xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
                      <path
                        d="m627-287 45-45-159-160v-201h-60v225l174 181ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-82 31.5-155t86-127.5Q252-817 325-848.5T480-880q82 0 155 31.5t127.5 86Q817-708 848.5-635T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Zm0-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480-820q-140 0-240 100T140-480q0 140 100 240t240 100Z"/>
                    </svg>
                    <p className="text-base md:text-lg max-w-sm">
                      Date posted: Aug 16, 2023
                    </p>
                  </div>
                  <p ref={el} className="mt-6 text-base md:text-lg max-w-sm">
                    An infographics showing the countries with the most population in Africa. Nigeria is the most
                    populated African country and it shows that for every 100 Africans, 16 of them are Nigerians.
                  </p>
                </div>
                <img src="/images/3.png" alt="Laptop" className="w-full rounded-3xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsOnTheGo;
