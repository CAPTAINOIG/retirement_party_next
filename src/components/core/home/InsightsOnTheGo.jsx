import React from "react";
import Button from "@/components/global/Button.jsx";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

const InsightsOnTheGo = () => {
  return (
    <div className="overflow-hidden md:overflow-visible">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="relative col-span-5">
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
            className="relative col-span-7 -order-1 md:order-1 flex md:justify-center w-full overflow-hidden md:overflow-visible py-4"
          >
            <div className="relative w-full">
              <div className="relative z-[3]">
                <img src="/images/laptop.png" alt="Laptop" className="w-full rounded-3xl"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsOnTheGo;
