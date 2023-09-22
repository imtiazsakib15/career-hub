import { useEffect } from "react";
import { useState } from "react";
import Category from "./Category";

const JobCategoryList = () => {
  const [jobCategory, setJobCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobCategory(data));
  }, []);
  return (
    <div className="text-center mt-20">
      <h2 className="text-4xl font-extrabold">Job Category List</h2>
      <p className="mt-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {
            jobCategory.map(category => <Category key={category.id} category={category} />)
        }
      </div>
    </div>
  );
};

export default JobCategoryList;
