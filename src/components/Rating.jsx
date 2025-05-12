
const Rating = ({ rate }) => {
  return (
    <div>
      {Array.from({ length: Math.ceil(rate) }, (_, index) => () => (
        <i
          key={`yellow = ${index}`}
          className="fa-solid fa-star text-yellow-400"
        ></i>
      ))
        .concat(
          Array.from({ length: 5 - Math.ceil(rate) }, (_, index) => () => (
            <i
              key={`gray = ${index}`}
              className="fa-solid fa-star text-gray-400"
            ></i>
          ))
        )
        .map((Star) => Star())}
    </div>
  );
};

export default Rating;
