import { useState } from "react";
import Registration from "../components/Registration";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import Spinner from "../components/Spinner";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const [isError, setIsError] = useState(null);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(data)).unwrap();
      navigate("/");
    } catch (error) {
      setIsError(error.message || "check your email or password");
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
          type="Login"
          handleOnSubmit={handleOnSubmit}
          setData={setData}
          error={isError}
        />
      </section>
    </>
  );
};

export default Login;
