import React, { useEffect, useRef } from "react";
import Button from "@/components/global/Button.jsx";
import { IconArrowRight, IconCalendar, IconClock, IconFileInvoice, IconFolders } from "@tabler/icons-react";
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
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="relative md:col-span-6 order-1 md:order-none">
            <h2 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[1.1] max-w-lg">
              Get insights on various topics on the go.
            </h2>
            <p className="mt-6 text-base md:text-lg max-w-sm">
              Chat with Lens for insights on topics like economy, business, education, election etc
            </p>
            <Link href={ '/infographics' }>
              <Button color="black" className="mt-12" size="lg" rightIcon={ <IconArrowRight/> }>
                Let's go
              </Button>
            </Link>
          </div>
          <div
            className="relative md:col-span-4 flex md:justify-center w-full overflow-hidden md:overflow-visible py-4"
          >
            <div className="relative w-3/4 md:w-full">
              <div className="relative">
                <div
                  className="hidden md:block absolute animate-bounce bg-white border shadow rounded-[1.2rem] top-[5rem] left-[-5rem] px-8 py-6"
                >
                  <div className="flex items-center gap-4 my-3">
                    <IconFileInvoice className="text-blue-600" size="20"/>
                    <p className="text-base md:text-lg max-w-sm">
                      Infographics on Africa
                    </p>
                  </div>
                  <div className="flex items-center gap-4 my-3">
                    <IconFolders className="text-teal-600" size="20"/>
                    <p className="text-base md:text-lg max-w-sm">
                      Africa
                    </p>
                  </div>
                  <div className="flex items-center gap-4 my-3">
                    <IconCalendar className="text-red-600" size="20"/>
                    <p className="text-base md:text-lg max-w-sm">
                      2023
                    </p>
                  </div>
                </div>
                <div
                  className="hidden md:block absolute min-h-[250px] w-[400px] bg-white border shadow rounded-[1.2rem] bottom-[5rem] right-[-15rem] px-8 py-6"
                >
                  <div className="flex items-center gap-2 my-3">
                    <IconClock size="20"/>
                    <p className="text-base md:text-lg max-w-sm">
                      Date posted: Aug 16, 2023
                    </p>
                  </div>
                  <p ref={ el } className="mt-6 text-base md:text-lg max-w-sm">
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
