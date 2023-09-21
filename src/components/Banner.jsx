import bannerImg from "./../assets/images/user.png";

const Banner = () => {
  return (
    <div className="hero bg-sky-50">
      <div className="container mx-auto px-5 sm:px-12 lg:px-20 py-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <div className="lg:w-1/2">
            <img className="w-full -mb-20" src={bannerImg} />
          </div>
          <div className="text-center lg:text-left lg:w-1/2 mt-28 lg:mt-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-relaxed">
              One Step Closer To Your
              <span className="text-violet-500"> Dream Job</span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-primary text-white md:text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
