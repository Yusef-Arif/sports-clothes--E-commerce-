import { useState } from "react";
import Registration from "../components/Registration";

const Login = () => {
  const [data,setData] = useState({
    email: "",
    password: "",
  });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };
  return (
    <section className="h-screen flex justify-center items-center mb-7">
      <Registration
        type="Login"
        handleOnSubmit={handleOnSubmit}
        setData={setData}
      />
    </section>
  );
};

export default Login;
