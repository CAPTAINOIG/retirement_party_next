const JoinOurTeam = () => {
  return (
    <div>
      <div className="container">
        <div className="grid md:grid-cols-11 gap-16 items-center">
          <div className="md:col-span-6">
            <div className="rounded-3xl overflow-hidden grid grid-cols-2 gap-0">
              <img
                src="https://picsum.photos/400/400"
                alt="Office"
                className="w-full h-[120px] md:h-[200px] object-cover"
              />
              <img
                src="https://picsum.photos/400/401"
                alt="Office"
                className="w-full h-[120px] md:h-[200px] object-cover"
              />
              <img
                src="https://picsum.photos/400/402"
                alt="Office"
                className="w-full h-[120px] md:h-[200px] object-cover"
              />
              <img
                src="https://picsum.photos/400/403"
                alt="Office"
                className="w-full h-[120px] md:h-[200px] object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-5 order-1 md:order-none text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-semibold">Join our Team</h2>
            <p className="max-w-md mx-auto md:mx-0 mt-4 md:mt-6 md:text-lg">
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
