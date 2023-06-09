const FilterProducts = ({
  selectedCategoryItem,
  setSelectedCategoryItem,
  setSelectedCompanyItem,
  allCategories,
  allCompanies,
  removeFilter,
}) => {
  const onCategoryChange = (cat) => {
    if (selectedCategoryItem === cat || cat === "all") {
      removeFilter();
    } else {
      setSelectedCategoryItem(cat);
    }
  };

  const onCompanyChange = (company) => {
    if (company === "all") {
      removeFilter();
    } else {
      setSelectedCompanyItem(company);
    }
  };

  return (
    <aside className="hidden h-[500px] col-span-2 bg-white border-2 rounded-lg lg:block border-zinc-50">
      <div className="p-3 text-xl font-medium text-white capitalize rounded-t-lg bg-main">
        categories
      </div>
      <div className="flex justify-between p-4 capitalize">
        <h2 className="text-center">Filter</h2>
        <span
          onClick={() => removeFilter()}
          className="font-medium text-red-400 duration-200 cursor-pointer hover:text-red-600"
        >
          clear filters
        </span>
      </div>
      <hr />
      <div className="flex flex-col p-4 space-y-6">
        <article>
          <h3 className="my-2 capitalize">select category:</h3>
          <input
            type="radio"
            id="all"
            name="category"
            value="all"
            onChange={() => onCategoryChange("all")}
          />
          <label className="pl-2 capitalize" htmlFor="all">
            All
          </label>
          {allCategories.map((cat, i) => {
            return (
              <div key={i} className="mb-1">
                <input
                  type="radio"
                  id={cat}
                  name="category"
                  value={cat}
                  className="cursor-pointer"
                  onChange={() => onCategoryChange(cat)}
                />
                <label className="pl-2 capitalize" htmlFor="category">
                  {cat}
                </label>
              </div>
            );
          })}
        </article>
        <hr />
        <article>
          <label htmlFor="company" className="block mb-2 capitalize">
            select company:
          </label>
          <select
            name="company"
            id="company"
            className="p-2 rounded-md outline-none bg-slate-50"
            onChange={(e) => onCompanyChange(e.target.value)}
          >
            <option value="all">All</option>
            {allCompanies.map((company, i) => {
              return (
                <option
                  key={i}
                  className="capitalize cursor-pointer"
                  value={company}
                >
                  {company}
                </option>
              );
            })}
          </select>
        </article>
      </div>
    </aside>
  );
};
export default FilterProducts;
