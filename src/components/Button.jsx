const Button = ({ text, color }) => {
  return (
    <button
      className={`
        ${
          color === "black" ? "text-white bg-main" : "text-main bg-white"
        } text-xl py-3 px-12 rounded-3xl cursor-pointer font-semibold border max-w-[100%]`}
    >
      {text}
    </button>
  );
};

export default Button;
