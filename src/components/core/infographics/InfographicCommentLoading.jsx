import React from 'react';

const InfographicCommentLoading = () => {
  return (
    <div className="animate-pulse px-6">
      <div className="flex space-x-2">
        <div>
          <div className="bg-slate-200 w-10 h-10 rounded-full" />
        </div>
        <div className="w-full">
          <div className="bg-slate-200 w-3/12 h-[18px] rounded-full" />
          <div className="bg-slate-200 w-full h-[100px] rounded-3xl mt-3" />
        </div>
      </div>
    </div>
  );
};

export default InfographicCommentLoading;
