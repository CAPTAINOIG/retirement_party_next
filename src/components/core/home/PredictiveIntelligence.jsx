const PredictiveIntelligence = () => {
  return (
    <div className="relative flex items-center overflow-hidden py-[100px]">
      <div className="container grid h-full grid-cols-2 items-center gap-20">
        <div className="border-2">
          <img
            src="/images/pi.png"
            alt="Business intelligence dashboard"
            className="absolute top-0 right-1/2 w-2/3 rounded-2xl"
          />
        </div>
        <div>
          <h2 className="text-8xl !leading-[0.9] font-semibold">Predicting the future of Africa</h2>
          <p className="mt-4 text-xl">We are connecting intelligence to African's data, join us.</p>
        </div>
      </div>
    </div>
  );
};

export default PredictiveIntelligence;
