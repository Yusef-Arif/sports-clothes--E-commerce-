import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <div className="cursor-pointer h-[100%] flex flex-col justify-between items-start p-4 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 space-y-3 bg-white">
      <img
        src={product?.images?.[0] || "/fallback-image.jpg"}
        alt={"Product image"}
        className="rounded-2xl w-full h-48 object-cover"
      />
      <h2 className="text-lg font-semibold line-clamp-2">{product?.title}</h2>
      <Rating rate={product?.rating?.rate || 3} />
      <p className="text-lg font-bold text-main">${product?.price}</p>
    </div>
  );
};

export default ProductCard;
