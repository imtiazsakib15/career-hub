import Banner from "./Banner";
import JobCategoryList from "./JobCategoryList";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-5 sm:px-12 lg:px-20">
        <JobCategoryList />
      </div>
    </div>
  );
};

export default Home;
