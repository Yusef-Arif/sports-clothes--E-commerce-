import Button from "./Button";
import CustomeInput from "./CustomeInput";
import { useNavigate } from "react-router-dom";

const Registration = ({ type, setData, handleOnSubmit, error }) => {
  const navigate = useNavigate();

  const handleOnChange = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    if (type === "Login") {
      navigate("/signup");
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center bg-graybg p-5 sm:p-7 rounded-2xl shadow-lg w-full max-w-[95vw] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] mb-[5%]">
        <h1 className="text-main text-3xl sm:text-4xl font-extrabold">Sport</h1>
        <h2 className="text-main text-xl sm:text-2xl font-bold">{type}</h2>
        <p className="text-gray-500 text-base sm:text-lg text-center">
          Shop your styles, save top picks to your cart,
          <br className="hidden sm:block" /> track those orders & train with us.
        </p>
        <div className="w-full sm:w-[90%]">
          <form onSubmit={handleOnSubmit}>
            {type !== "Login" && (
              <CustomeInput
                type="text"
                text="Name"
                name="name"
                onChange={handleOnChange}
              />
            )}
            <CustomeInput
              type="email"
              text="Email"
              name="email"
              onChange={handleOnChange}
            />
            <CustomeInput
              type="password"
              text="Password"
              name="password"
              onChange={handleOnChange}
            />
            <div className="flex justify-center items-center">
              <Button text={type} color="black" />
            </div>
            {error && <p className="text-red-500 text-center mt-3">{error}</p>}
          </form>
        </div>
        <p className="text-gray-500 text-base sm:text-lg text-center">
          {type === "Login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <span
            className="text-main font-bold cursor-pointer hover:underline"
            onClick={handleClick}
          >
            {type === "Login" ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </>
  );
};

export default Registration;
