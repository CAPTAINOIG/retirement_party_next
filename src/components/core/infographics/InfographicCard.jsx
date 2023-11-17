import React, { useState } from "react";
import Link from "next/link";
import Image from "@/components/core/shared/Image.jsx";
import { formatDistance } from "date-fns";
import { IconHeart, IconMessageCircle } from "@tabler/icons-react";
import Button from "@/components/global/Button";
import InfographicCardComment from "./InfographicCardComment";
import classNames from "classnames";
import Logo from "@/components/core/shared/Logo";

const InfographicCard = ({ infographic }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showCommentsSection, setShowCommentsSection] = useState(false);
  const [truncateText, setTruncateText] = useState(true);

  const toggleTruncateText = () => {
    setTruncateText((prev) => !prev);
  };
  const toggleLike = () => {
    setIsLiked((isLiked) => !isLiked);
  };
  const toggleShowComment = () => {
    setShowCommentsSection((showComment) => !showComment);
  };
  return (
    <div className="w-full overflow-hidden hover:-translate-y-3 transition-all duration-200 bg-white rounded-xl border shadow-md">
      <div className="p-2 px-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 bg-primary-400 rounded-full"></div>
          <div className="">
            <span>Statisense</span>
            <p className="opacity-70 text-sm">
              {formatDistance(new Date(), new Date(infographic.createdAt))} ago
            </p>
          </div>
        </div>
        <Link
          href={`/infographics/${infographic.category.slug}/${infographic.slug}`}
        >
          <h5 className="font-medium text-xl">{infographic.title}</h5>
        </Link>
        <p
          className={classNames("text-base text-primary ", {
            "line-clamp-2 ": truncateText,
          })}
        >
          {infographic.description}
        </p>
        <p
          className="text-sm text-primary-500 cursor-pointer"
          onClick={toggleTruncateText}
        >
          {!truncateText ? "Read Less" : "Read More"}
        </p>
      </div>
      <Link
        href={`/infographics/${infographic.category.slug}/${infographic.slug}`}
        className="flex w-full"
      >
        <Image
          src={infographic.image}
          alt={infographic.title}
          className="rounded-b-none  w-full object-contain  border-b-0"
        />
      </Link>

      <div className=" overflow-hidden bg-white">
        <div className="p-2 px-6">
          <div className=" flex flex-row gap-5 text-sm text-gray-700">
            <div className="flex items-center gap-2 rounded-lg cursor-pointer w-max">
              <IconHeart
                className="font-light"
                color={isLiked ? "red" : "black"}
                fill={isLiked ? "red" : "none"}
                onClick={toggleLike}
              />
              213 reactions
            </div>
            <div
              className="flex items-center gap-1 rounded-lg cursor-pointer w-max"
              onClick={toggleShowComment}
            >
              <IconMessageCircle className="w-5" />
              213 comments
            </div>
          </div>
          {showCommentsSection && (
            <>
              <div className="flex flex-col md:flex-row mt-4 gap-3 md:items-center">
                <textarea
                  className="bg-white border p-1 px-3 text-base rounded-lg w-full"
                  placeholder="Add a comment"
                />
                <Button>Add comment</Button>
              </div>
              <div className="animate-pulse">
                <div className="bg-slate-200 w-3/12 h-[22px] rounded-full mt-4 " />
                <div className="bg-slate-200 w-full h-[22px] rounded-full mt-3" />
                <div className="bg-slate-200 w-full h-[22px] rounded-full mt-3" />
                <div className="bg-slate-200 w-5/12 h-[22px] rounded-full mt-3" />
              </div>
              <InfographicCardComment />
              <InfographicCardComment />
              <InfographicCardComment />
              <div className="flex items-center w-full pt-2">
                <Button
                  color="black"
                  size="sm"
                  variant="outlined"
                  className="mx-auto flex items-center justify-center"
                >
                  View More Comments
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfographicCard;
