import CategoriesLinks from "@/components/core/infographics/CategoriesLinks";
import TestRun from "@/components/core/shared/TestRun";
import Button from "@/components/global/Button";
import PropTypes from "prop-types";

import { IconMessageChatbot } from "@tabler/icons-react";
import Head from "next/head";
import { useState } from "react";

const InfographicsLayout = ({ PageHeader, children, pageTitle }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{pageTitle || "Statisense"}</title>
      </Head>
      <div className="bg-slate-50">
        {PageHeader}
        <div className="max-w-[1300px] mx-auto px-4 py-6 md:py-8">
          <div className=" md:grid md:grid-cols-9 gap-4 relative">
            <div className="h-min hidden lg:flex col-span-2 py-2 flex-col gap-2 sticky top-32">
              <CategoriesLinks />
            </div>
            <div className=" col-span-full w-full lg:col-span-4 grid md:grid-cols-1 items-center lg:max-w-2xl mx-auto gap-8 gap-y-5">
              {children}
            </div>
            <div className=" h-min col-span-3 hidden lg:flex flex-col gap-2 sticky top-32">
              <div className="bg-white border border-gray-300 flex flex-col items-center justify-center my-auto p-5 px-10 py-10 rounded-lg text-center">
                <div className="w-20 h-20 rounded-full bg-primary-600 grid place-items-center mb-6">
                  <IconMessageChatbot size="48" className="text-white" />
                </div>
                <div className="flex-1 flex flex-col ">
                  <h5 className="font-semibold text-xl">Chat with Bambi</h5>
                  <p className="mt-2 mb-6 max-w-[300px]">
                    Our AI data assistant Bambi is readily available to provide
                    you with any macro economic data.
                  </p>
                  <Button onClick={() => setIsChatbotOpen(true)}>
                    Chat with Bambi
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestRun isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </>
  );
};

InfographicsLayout.propTypes = {
  PageHeader: PropTypes.element,
  children: PropTypes.element,
  isInfographicsLoading: PropTypes.string,
  pageTitle: PropTypes.string,
};

export default InfographicsLayout;
