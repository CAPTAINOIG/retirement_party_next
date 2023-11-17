import React, { useState } from "react";
import {
  useGetCategoriesQuery,
  useGetTrendingInfographics,
} from "@/api/infographics";
import PageHeader from "@/components/core/shared/PageHeader";
import DefaultLayout from "@/components/core/DefaultLayout";
import InfographicsLayout from "@/components/core/InfographicsLayout";
import InfographicLoadingCard from "@/components/core/infographics/InfographicLoadingCard";
import Button from "@/components/global/Button";
import InfographicCard from "@/components/core/infographics/InfographicCard";
import Input from "@/components/global/Input";
import TestRun from "@/components/core/shared/TestRun";
import ChatWithBambi from "@/components/core/infographics/ChatWithBambi";
import { IconQuestionMark,IconUpload, IconPencil } from "@tabler/icons-react";

const InfographicsPage = () => {
  const { data = {}, isLoading: isInfographicsLoading } =
    useGetTrendingInfographics();
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const { infographics = [] } = data;
  return (
    <InfographicsLayout
      isInfographicsLoading={isInfographicsLoading}
      pageTitle="Trending"
      PageHeader={<PageHeader title="Trending" />}
    >
      <ChatWithBambi setIsChatbotOpen={setIsChatbotOpen} />
      <div className=" w-full focus-within:border-[#0e88e5] bg-white rounded-3xl px-1 md:px-4 py-2">
        <input
          className=" w-full border rounded-3xl  px-4 py-2 peer bg-gray-100"
          placeholder="ask a question"
        />
        <div className="flex flex-cl md:flex-row items-center w-full bg-white justify-between pt-2 md:px-9">
          <Button
            variant="text"
            size="sm"
            color="black"
            leftIcon={<IconQuestionMark />}
            full
          >
            Ask
          </Button>
          <div class="hidden md:inline-block my-auto h-full min-h-[1em] w-[1px] self-stretch bg-gray-300 opacity-100 dark:opacity-50"></div>
          <Button
            variant="text"
            size="sm"
            color="black"
            className=""
            leftIcon={<IconUpload />}
          >
            Upload
          </Button>
          <div class="hidden md:inline-block my-auto h-full min-h-[1em] w-[1px] self-stretch bg-gray-300 opacity-100 dark:opacity-50"></div>
          <Button
            variant="text"
            size="sm"
            color="black"
            className=""
            leftIcon={<IconPencil />}
          >
            Use AI
          </Button>
        </div>
        <ul className="hidden peer-focus:flex rounded-xl border overflow-x-hidden  flex-col mt-2 text-sm bg-white">
          <li className="py-4 px-4 hover:bg-gray-50 cursor-pointer">
            Who earns most income in nigeria?
          </li>
          <li className="py-4 px-4 hover:bg-gray-50 cursor-pointer">
            Who earns most income in nigeria?
          </li>
          <li className="py-4 px-4 hover:bg-gray-50 cursor-pointer">
            Who earns most income in nigeria?
          </li>
        </ul>
      </div>
      {isInfographicsLoading ? (
        <div className=" grid md:grid-cols-1 gap-10">
          <InfographicLoadingCard />
          <InfographicLoadingCard />
          <InfographicLoadingCard />
        </div>
      ) : (
        <>
          {!!infographics.length ? (
            <div className=" grid md:grid-cols-1 items-center lg:max-w-2xl mx-auto gap-8 gap-y-5">
              {infographics.slice(0, 3).map((infographic) => (
                <InfographicCard
                  key={infographic._id}
                  infographic={infographic}
                />
              ))}
            </div>
          ) : (
            <div className="px-10 py-10 text-center opacity-50">
              <p className="text-lg italic">Nothing to see here</p>
            </div>
          )}
        </>
      )}
      <TestRun isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </InfographicsLayout>
  );
};

InfographicsPage.Layout = DefaultLayout;

export default InfographicsPage;
