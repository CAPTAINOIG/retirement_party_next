import React, { useState } from "react";

import { IconHeart } from "@tabler/icons-react";
import Button from "@/components/global/Button";
const InfographicCardComment = ({ infographic }) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked((isLiked) => !isLiked);
  };
  return (
    <div className="py-4 flex flex-col gap-1 border-b">
      <div className="flex gap-2 items-center ">
        <p className="font-bold">John Doe</p>{" "}
        <span className="font-normal text-sm">Jul 7</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
        perspiciatis quam assumenda soluta voluptas vitae nisi dicta impedit
        quidem! Aliquid soluta incidunt modi aperiam a officia suscipit ab
        accusamus. Sapiente eius, animi quam nulla quos magnam aliquam nemo
        distinctio ad!
      </p>
      <div className="flex items-center gap-2 rounded-lg cursor-pointer w-max">
        <IconHeart
          className="font-light"
          color={isLiked ? "red" : "black"}
          fill={isLiked ? "red" : "none"}
          onClick={toggleLike}
        />
        213 likes
      </div>
      <div className="ml-8 ">
        <div className="animate-pulse">
          <div className="bg-slate-200 w-3/12 h-[22px] rounded-full mt-4 " />
          <div className="bg-slate-200 w-full h-[22px] rounded-full mt-3" />
          <div className="bg-slate-200 w-full h-[22px] rounded-full mt-3" />
          <div className="bg-slate-200 w-5/12 h-[22px] rounded-full mt-3" />
        </div>

        <div className="py-2 flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <p className="font-bold">John Doe</p>{" "}
            <span className="font-normal text-sm">Jul 7</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            perspiciatis quam assumenda soluta voluptas vitae nisi dicta impedit
            quidem! Aliquid soluta incidunt modi aperiam a officia suscipit ab
            accusamus. Sapiente eius, animi quam nulla quos magnam aliquam nemo
            distinctio ad!
          </p>
          <div className="flex items-center gap-2 rounded-lg cursor-pointer w-max">
            <IconHeart
              className="font-light"
              color={isLiked ? "red" : "black"}
              fill={isLiked ? "red" : "none"}
              onClick={toggleLike}
            />
            213 likes
          </div>
        </div>
        <div className="flex items-center w-full pt-2">
          <Button
            color="black"
            size="sm"
            variant="outlined"
            className="mx-auto flex items-center justify-center"
          >
            View More Replies
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfographicCardComment;
