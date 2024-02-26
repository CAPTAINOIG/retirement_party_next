const JoinOurTeam = () => {
  return (
    <div>
      <div className="container">
        <div className="grid items-center gap-16 md:grid-cols-11">
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-0 overflow-hidden rounded-3xl">
              <img
                src="https://picsum.photos/400/400"
                alt="Office"
                className="h-[120px] w-full object-cover md:h-[200px]"
              />
              <img
                src="https://picsum.photos/400/401"
                alt="Office"
                className="h-[120px] w-full object-cover md:h-[200px]"
              />
              <img
                src="https://picsum.photos/400/402"
                alt="Office"
                className="h-[120px] w-full object-cover md:h-[200px]"
              />
              <img
                src="https://picsum.photos/400/403"
                alt="Office"
                className="h-[120px] w-full object-cover md:h-[200px]"
              />
            </div>
          </div>
          <div className="order-1 text-center md:order-none md:col-span-5 md:text-left">
            <h2 className="text-2xl font-semibold md:text-4xl">Join our Team</h2>
            <p className="mx-auto mt-4 max-w-md md:mx-0 md:mt-6 md:text-lg">
              Are you ready to be a part of a groundbreaking AI data company that's reshaping the landscape of data
              analysis across diverse industries? At Statisense, we're on a mission to revolutionize how businesses
              navigate and harness the power of data. We're looking for talented individuals who share our passion for
              innovation, accuracy, and delivering unparalleled insights to join our team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
