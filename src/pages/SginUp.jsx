import { useState } from "react";
import Registration from "../components/Registration";
import { useDispatch, useSelector } from "react-redux";
import {  createNewUser } from "../api/users";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import Spinner from "../components/Spinner";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "https://picsum.photos/800",
  });
  const [isError, setIsError] = useState(null);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      // const {isAvailable} = await dispatch(
      //   checkEmailAvailability({ email: data.email })
      // ).unwrap();
      // console.log(isAvailable)
      // if (!isAvailable) {
      //   setIsError("Email is already taken");
      //   return;
      // } else {
        await dispatch(createNewUser(data)).unwrap();
        await dispatch(
          loginUser({ email: data.email, password: data.password })
        ).unwrap();
        navigate("/");
      // }
    } catch (error) {
      setIsError(error.message || "Something went wrong");
    }
  };

  return (
    <>
      {loading && (
        <div className="absolute top-0 left-0 w-full min-h-[100vh] bg-shadowbg flex items-center justify-center z-50">
          <Spinner size="size-50" />
        </div>
      )}
      <section className="h-screen flex justify-center items-center mb-7">
        <Registration
          type="Sign Up"
          setData={setData}
          handleOnSubmit={handleOnSubmit}
          error={isError}
        />
      </section>
    </>
  );
};

export default SignUp;
