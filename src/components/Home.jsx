import Banner from "./Banner";
import FeaturedJobs from "./FeaturedJobs";
import JobCategoryList from "./JobCategoryList";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-5 sm:px-12 lg:px-20">
        <JobCategoryList />
        <FeaturedJobs />
      </div>
    </div>
  );
};

export default Home;
