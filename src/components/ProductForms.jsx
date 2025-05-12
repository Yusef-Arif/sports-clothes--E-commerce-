import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../api/products";
import FormValidator from "./FormValidator";
import CustomeInput from "./CustomeInput";

const ProductForms = ({
  use,
  handleSubmit,
  setFormData,
  formData,
  error,
  validateErrors,
}) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "images" ? value.split(",").map((img) => img.trim()) : value,
    }));
  };
  //for getting the categories for the select
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="productForms p-2">
      <h1 className="relative text-3xl font-bold pl-2 mb-7 dark:text-primary-txt-dark">
        {use} Product
      </h1>
      <form onSubmit={handleSubmit} className="ml-3 lg:max-w-[40%]">
          <CustomeInput
            text="Title"
            type="text"
            name="title"
            onChange={handleChange}
            value={formData.title}
          />
          <FormValidator error={validateErrors?.title} />
        <CustomeInput
          text="Description"
          type="text"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />
        <FormValidator error={validateErrors?.description} />
        <CustomeInput
          text="Price"
          type="number"
          name="price"
          onChange={handleChange}
          value={formData.price}
        />
        <FormValidator error={validateErrors?.price} />
        <div className="flex flex-col my-3 gap-2 max-w-[50%]">
          <label htmlFor="categories" className="text-xl font-medium text-main">
            Categories
          </label>
          <select
            id="categories"
            name="categoryId"
            onChange={(e) => handleChange("categoryId", e.target.value)}
            value={formData.categoryId}
            className="cursor-pointer p-2 border border-secondary-txt focus:border-primary-btn-bg rounded-md outline-none transition-all duration-300 ease-in-out text-main"
          >
            <option value="" className="bg-graybg cursor-pointer">
              Choose category
            </option>

            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
                className="dark:bg-primary-bg-dark cursor-pointer"
              >
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <FormValidator error={validateErrors?.categoryId} />
        <CustomeInput
          text="Image URL"
          type="text"
          name="images"
          onChange={handleChange}
          value={formData.images.join(", ")}
        />
        <FormValidator error={validateErrors?.images} />
        <button
          type="submit"
          disabled={error && use === "Edit" ? true : false}
          className={`${
            error && use === "Edit" ? "grayscale opacity-50" : ""
          } mt-6 bg-main text-white font-semibold text-xl px-4 py-2 rounded-md cursor-pointer filter hover:bg-white hover:text-main border transition-all duration-300 ease-in-out`}
        >
          {use === "Create" ? "Create" : "Edit"} a product
        </button>
        {error && (
          <p className="text-red-500 mt-2">Oops, Something Went Wrong</p>
        )}
      </form>
    </div>
  );
};

export default ProductForms;
