import React from 'react';

const Report = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="grid-cols-4 space-y-4 bg-white px-1 md:relative md:z-10 md:grid md:gap-8 md:space-y-0 md:px-0">
        <img className="mx-auto h-[300px] w-full rounded object-cover" src="/images/5.jpg" />
        <img className="mx-auto h-[300px] w-full rounded object-cover" src="/images/3.jpg" />
        <img className="mx-auto h-[300px] w-full rounded object-cover" src="/images/2.jpg" />
        <img className="mx-auto h-[300px] w-full rounded object-cover" src="/images/2.jpg" />
      </div>
    </div>
  );
};

export default Report;
