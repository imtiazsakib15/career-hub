const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="bg-sky-50 p-10 text-left rounded-lg">
      <img className="p-3 bg-gray-200 rounded-lg" src={logo} alt={category_name} />
      <h4 className="text-xl font-bold mt-8">{category_name}</h4>
      <p className="mt-2">{availability}</p>
    </div>
  );
};

export default Category;
